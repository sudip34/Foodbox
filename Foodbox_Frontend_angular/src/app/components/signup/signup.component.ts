import { MyFromValidator } from './../../validators/my-from-validator';
import { AlertService } from './../../services/alert.service';
import { Login } from './../../common/login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser:Login=new Login();
  invalidLogin:boolean = false;
  message:string = '';
  // successful:Login;
  userNames: string[] = [];
  

  //============================
  // registerArray:any = {};

   passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,16}$';

  //=============================================================


  registerForm: FormGroup;
  loading = false;
  submitted = false;






  constructor(private loginService:UserLoginService,
              private router:Router,
              private formBuilder:FormBuilder,
              private alertService: AlertService) 
              { 
                if(this.loginService.isUserLoggeIn()){
                  this.router.navigate(['/'])
                }
              }

  ngOnInit(): void {
    this.loginService.getTheListOfuserName().subscribe(
      data => this.userNames = data
    );

    this.registerForm = this.formBuilder.group({
      firstName:new FormControl('',[ Validators.required]) ,
      lastName:new FormControl('',[ Validators.required]) ,
      email:new FormControl( '', [Validators.required, MyFromValidator.notOnlyWhitespace, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),//works for anuva@gamil.com
      username:new FormControl('', [ Validators.required,Validators.minLength(6),MyFromValidator.notOnlyWhitespace]),
      password:new FormControl( '', [Validators.required, Validators.minLength(6),MyFromValidator.notOnlyWhitespace,Validators.pattern(this.passwordPtn)]),
      confirmpass: new FormControl( '', [Validators.required, Validators.minLength(6),MyFromValidator.notOnlyWhitespace,Validators.pattern(this.passwordPtn)])
    
  });



  }



  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    for(let name of this.userNames){
    if(this.registerForm.value.username === name){
      console.log(name);
      console.log(this.registerForm.value.username);
      this.invalidLogin= true;
      this.message="This username is taken"
      return;
      }
      this.invalidLogin= false;
    }
        

    this.loading = true;
    this.newUser.role="User";
    this.newUser.adminName=this.registerForm.value.username;
    console.log(this.newUser.adminName);
    this.newUser.password=this.registerForm.value.password;
    this.newUser.firstName=this.registerForm.value.firstName;
    this.newUser.lastName=this.registerForm.value.lastName;
    this.newUser.email=this.registerForm.value.email;
    this.loginService.createNewUser(this.newUser)
        // .pipe(first())
        .subscribe(
            (data:any) => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['user-login']);
            },
          (            error: string) => {
                this.alertService.error(error);
                this.loading = false;
            });


}

 




  // signup(){
  //   for(let name of this.userNames){
  //     if(this.userName !== name){
  //       console.log(name);
  //       console.log(this.userName);
  //       // this.invalidLogin=false;
  //       if(this.password===this.repeatPassword){
  //         this.newUser.adminName=this.userName;
  //         this.newUser.role ="User";
  //         this.newUser.password = this.password;
  //         console.log(this.newUser);
  //         this.loginService.createNewUser(this.newUser).subscribe( data =>{
  //           console.log(data);
  //         //  this.router.navigate(['products', this.userName]);
  //         this.router.navigate(['user-login', this.userName]);
  //          this.invalidLogin=false;
  //        },
  //        error =>{
  //           console.log(error);
  //          this.invalidLogin=true;
  //        }
  //      );
  //       }else{
  //         this.invalidLogin=true;
  //         this.message = "Typed passwords are not matched! Give the Password carefully!"
  //       }
  //     }
  //     this.invalidLogin=true;
  //   this.message = "This given name is already taken please try a new user-name"
  //   } 
  //   // this.invalidLogin=true;
  //   // this.message = "This given name is already taken please try a new user-name"
  // }
  

}
