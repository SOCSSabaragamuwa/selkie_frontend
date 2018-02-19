import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  postRegister(register: any) {
      console.log(register);
      return this.http.post('/users', register).map((response: Response) => response.json());
  }

  postFaculty(faculty: any) {
    console.log(faculty);
    return this.http.post('/faculties', faculty).map((response: Response) => response.json());
  }
  getFaculties() {
    return this.http.get('/faculties').map((response: Response) => response.json());
  }

  getDepartments() {
    return this.http.get('/departments').map((response: Response) => response.json());
  }

  getDegrees() {
   return this.http.get('/degrees').map((response: Response) => response.json());
  }

  postDepartment(department: any) {
    console.log(department);
    return this.http.post('/departments', department).map((response: Response) => response.json());
  }

  postDegree(degrees: any) {
    console.log(degrees);
    return this.http.post('/degrees', degrees).map((response: Response) => response.json());
  }
}
