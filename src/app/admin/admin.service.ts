import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {

  constructor(private http:Http) { }

  getAllUsers(){
    return this.http.get('/users').map((response: Response) => response.json());
  }

}
