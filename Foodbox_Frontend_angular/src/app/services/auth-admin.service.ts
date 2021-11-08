import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private login:UserLoginService, private router:Router){};
  canActivate():boolean{
    if(this.login.isAdminLoggedIn()){
      return true;
    }
    this.router.navigate(['admin-login']);
    return false;
  }
}
