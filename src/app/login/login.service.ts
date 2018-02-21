import { Injectable } from '@angular/core';
import { Login} from './login';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
   }
   sendData(login:any){
    console.log(login);
    return this.http.post('/oauth/token', login).map((response: Response) => response.json());
  }

  StoreToken(Token:any){
    localStorage.setItem('access_token', Token.access_token);
    console.log(localStorage.getItem('access_token'));
  }
}
