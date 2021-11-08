import { Login } from './../common/login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  


  login_Path = "http://18.159.124.247:8080/api";
  loginUrl = "http://18.159.124.247:8080/api/login";
  userNameUrl = "http://18.159.124.247:8080/api/login/userName";
  adminNameUrl = "http://18.159.124.247:8080/api/login/adminName";
  updatePasswordUrl = "http://18.159.124.247:8080/api/login/update";

  login:Login;
 

  invalidLogin = false
  massage: Login;

  constructor(private httpClient: HttpClient) { }

  getTheListOfAdminName(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.adminNameUrl);
  }
  getTheListOfuserName(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.userNameUrl);
  }
  getTheUser(theUserName:string):Observable<Login>{
    return this.httpClient.get<Login>(`${this.loginUrl}/${theUserName}`);
  }



  getTheLoginCredentialForUser(theAdminName: string): Observable<Login> {
    const url = `${this.loginUrl}/${theAdminName}/User`;
    return this.httpClient.get<Login>(url);
  }

  getTheLoginCredentialForAdmin(theAdminName: string): Observable<Login> {
    const url = `${this.loginUrl}/${theAdminName}/Admin`;
    return this.httpClient.get<Login>(url);
  }

  updateTheLoginCredential(theLogin: Login): Observable<Login> {

    return this.httpClient.post<Login>(this.updatePasswordUrl, theLogin);
  }

 


  

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('adminName');
    return !(admin === null);

  }
  isUserLoggeIn(){
    let user=sessionStorage.getItem('userName')
    return !(user===null)
  }

  logOut() {
    sessionStorage.removeItem('adminName');
    // sessionStorage.removeItem('authenticatedUser');
  }
  logOutuser() {
    sessionStorage.removeItem('userName');
  }

  createNewUser(user:Login): Observable<Login>  {
    const url = `${this.login_Path}/newUSer`;
    return this.httpClient.post<Login>(url, user);
    
  }





}
