import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../model/usermodel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dataUser } from '../mock/datauser.mock';
import { ProfileModel } from '../model/profilemodel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getProfileList() {
    return this.http.get('https://reqres.in/api/users');
  }

  getProfileByNik(_nik: number) {
    return this.http.get('https://reqres.in/api/users/?id=' + _nik);
  }

  getProfile(): UserModel[] {
    return dataUser;
  }

  addProfile(form: FormGroup, karyawan: ProfileModel[]) {
    if (form.valid) {
      const newUser: ProfileModel = {
        id: 99,
        first_name: form.value.first_name,
        last_name: form.value.last_name,
        email: form.value.email,
        avatar: form.value.avatar
      };

      const existingUserIndex = karyawan.findIndex(user => user.email === form.value.email);

      if (existingUserIndex > -1) {
        this.showMessage('Email sudah digunakan !');
      } else {
        karyawan.push(newUser);
        this.showMessage('Berhasil menambahkan data !');
        form.reset();
      }

    } else {
      this.showMessage('Formulir tidak valid !')
    }
  }

  updateProfile(form: FormGroup, karyawan: ProfileModel[]) {
    const updateUser: ProfileModel = {
      id: 90,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      avatar: form.value.avatar
    };

    const indexToUpdate = karyawan.findIndex(user => user.email === form.value.email);

    if (indexToUpdate > -1) {
      karyawan[indexToUpdate] = updateUser;
      form.reset()
      this.showMessage('Data berhasil diubah !')
    } else {
      this.showMessage('Data tidak ditemukan !')
    }
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

}
