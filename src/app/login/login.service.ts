import { Injectable } from '@angular/core';
import { Login} from './login';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
   }
   authToken;
   options;
   sendData(login:any){
    console.log(login);
    return this.http.post('/oauth/token', login).map((response: Response) => response.json());
  }

  StoreToken(Token:any){
    localStorage.setItem('access_token', Token.access_token);
    console.log(localStorage.getItem('access_token'));
  }

  getAuthenticateHeader(){
    return this.options;
  }
  createAuthenticationHeader(){
    const Token = localStorage.getItem('access_token');
    this.authToken = Token;
    console.log("Auth Token");
    console.log(this.authToken);
    const headers = new Headers();
    const outh2 = "Bearer " +this.authToken;
    headers.append("authorization",outh2);
    headers.append("Content-Type", "application/json");
    this.options = new RequestOptions({ headers: headers });
  }
}
