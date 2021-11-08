import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/common/login';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  login: Login;
  adminNames: string[] = [];
  adminName1: string = '';
  password: string = '';

  message: string;
  invalidLogin = false
  constructor(private loginservice: UserLoginService, private router: Router) { }





  ngOnInit() {
    this.loginservice.getTheListOfAdminName().subscribe(
      data => this.adminNames = data
    );
  }

  checkLogin() {
    if (this.adminNames.indexOf(this.adminName1) > -1) {
      console.log(this.adminNames);
      console.log(this.adminName1);
      
      if(this.authenticate(this.adminName1, this.password))
      {

        this.router.navigate(['dashboard'])
        this.invalidLogin = false
      } else
        this.invalidLogin = true
        this.message = "This given name is not a adminName! Please give the correct name and password"
    } 
    

  }

  authenticate(adminName: string, password: string) {

    this.loginservice.getTheLoginCredentialForAdmin(adminName).subscribe(
      data => this.login = data
    );
    let theAdminName: any = this.login.adminName;
    let thePassword: any = this.login.password;
    let theRole:any=this.login.role;
    console.log(theRole);
    console.log(thePassword);
    console.log(password);
    console.log(theAdminName);
    let role:any = "Admin";
    if ((password === thePassword)&& (role === theRole)) {
      sessionStorage.setItem('adminName', adminName)
      return true;

    } else {
      return false;
    }


  }

}
