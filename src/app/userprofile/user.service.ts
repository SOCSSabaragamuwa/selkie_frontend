import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  

  constructor(private http: Http) { }

  getAllMembers(){
    return this.http.get('/users').map((response: Response) => response.json());
  }

}
