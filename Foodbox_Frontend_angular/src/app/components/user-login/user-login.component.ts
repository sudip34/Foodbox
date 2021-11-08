import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/common/login';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login: Login;
  userNames: string[] = [];
  userName: string = '';
  password: string = '';
  

  message: string;
  invalidLogin = false

  constructor( private loginservice: UserLoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginservice.getTheListOfuserName().subscribe(
      data => this.userNames = data
    );
  }


 



  checkLogin() {
    if (this.userNames.indexOf(this.userName) > -1) {
      console.log(this.userNames);
      console.log(this.userName);
      if(this.authenticateUser1(this.userName)){
        if (this.authenticateUser(this.userName, this.password)
        ) {
          this.router.navigate(['products'])
          this.invalidLogin = false
        } else
          this.invalidLogin = true
          this.message = "Invalid Credential! Please give the correct name and password"
      }
    }else{
      this.invalidLogin = true
          this.message = "Invalid Credential! Please Sign up"
    }
  }

 

  authenticateUser1(userName: string) {
   for(let user of this.userNames){
    if ( userName === user) 
      
    console.log("not found");
    return true;
   }
   console.log("not found");
   return false;

  }

  authenticateUser(userName: string, password: string) {
    this.loginservice.getTheLoginCredentialForUser(userName).subscribe(
      data => this.login = data
    );
    let theRole:string = "";
    if(this.login.role=='undefined'){
      console.log(this.login.role)

    }else{
      theRole=this.login.role;
    }
    
    
    let thePassword: string = this.login.password;
    console.log(thePassword);
    console.log(password);
    if ( (password === thePassword) && (theRole == "User")) {
      sessionStorage.setItem('userName', userName)
      console.log('get the user')
      return true;

    } else {
      console.log('not getting')
      return false;
    }


  }

 

  signUp(){
    this.router.navigate(['signup'])

  }
}
