import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileModel } from 'src/app/model/profilemodel';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private pService: ProfileService) { }

  updateForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl('', Validators.required)
  });

  data = this.pService.getProfile()

  @Input() tipe: string = '';
  @Input() karyawan: ProfileModel[] = [];

  @Output() selesai: EventEmitter<boolean> = new EventEmitter();

  updateData(form: FormGroup) {
    const id = localStorage.getItem("id");
    alert(id);
    if(this.tipe === 'update'){
      this.pService.updateProfile(form, this.karyawan)
    } else {
      this.pService.addProfile(form, this.karyawan)
    }

    this.selesai.emit(true);
    
  }

}
