import { Injectable } from '@angular/core';
import { adminData } from '../mock/admin.mock';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginAdmin(username: string, password: string): boolean {
    const foundAdmin = adminData.find(data => data.username === username && data.password === password);
    return !!foundAdmin;
  }

}
