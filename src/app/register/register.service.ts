import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  postRegister(register:any){
      console.log(register);
      return this.http.post('/users',register).map((response: Response) => response.json());
  }

}
