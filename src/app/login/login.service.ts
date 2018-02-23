import { Injectable } from '@angular/core';
import { Login} from './login';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
   }
   authToken;
   refressToken;
   options;
   refressoptions;
   sendData(login:any){
    console.log(login);
    return this.http.post('/oauth/token', login).map((response: Response) => response.json());
  }

  StoreToken(Token:any){
    localStorage.setItem('access_token', Token.access_token);
    localStorage.setItem('refresh_token',Token.refresh_token);
    console.log(localStorage.getItem('access_token'));
  }

  getAuthenticateHeader(){
    return this.options;
  }

  getRefressTokenHeader(){
    return this.refressoptions;
  }
  createRefressTokenHeader(){
    const Token = localStorage.getItem('refresh_token');
    this.refressToken = Token;
    console.log("Auth Token");
    console.log(this.refressToken);
    const headers = new Headers();
    const outh2 = "Bearer " +this.refressToken;
    headers.append("authorization",outh2);
    headers.append("Content-Type", "application/json");
    this.refressoptions = new RequestOptions({ headers: headers });
  }
  createAuthenticationHeader(){
    const Token = localStorage.getItem('access_token');
    this.authToken = Token;
    console.log("Auth Token");
    console.log(this.authToken);
    const headers = new Headers();
    const outh2 = "Bearer " +this.authToken;
    headers.append("authorization",outh2);
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    this.options = new RequestOptions({ headers: headers });
  }

  LogOutdata(){
    localStorage.clear();
  }

  getUserDetails(){
    this.createAuthenticationHeader();
    return this.http.get('/users/me', this.options).map((response: Response) => response.json());
  }

  getUserById(id:any){
    return this.http.get('/users/' + id).map((response: Response) => response.json());
  }
}
