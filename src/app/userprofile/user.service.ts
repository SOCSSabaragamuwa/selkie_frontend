import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {

  memberList:User=
    {
      userId:1,
      firstName:"sathira",
      lastName:"umesh",
      userName:"neutro",
      date:"342",
      gender:"male",
      university:"Sabaragamuwa",
      faculty :"applied",
      department:"cis"




  };
  



  

  constructor(private http: Http) { }

  getAllMembers(){
    return this.http.get('/users').map((response: Response) => response.json());
  }

  getUserList(){
    return this.memberList;
  }
}
