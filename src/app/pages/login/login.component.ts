import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminModel } from 'src/app/model/adminmodel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  admin: AdminModel = new AdminModel();
  isLoginSuccessful: boolean = false;

  handleLogin() {
    this.isLoginSuccessful = this.loginService.loginAdmin(this.admin.username, this.admin.password);

    if (this.isLoginSuccessful) {
      this.router.navigate(['/profile']);
      this.showMessage('login successful !')
    } else {
      this.showMessage('login unsuccessful !')
    }
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }


}
