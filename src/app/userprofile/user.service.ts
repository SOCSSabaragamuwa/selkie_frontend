import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';
import { RegisterService } from '../register/register.service';

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
  



  

  constructor(private http: Http,private registerservise:RegisterService) { }

  getAllMembers(){
    return this.http.get('/users').map((response: Response) => response.json());
  }
getAllFaculties(){
  return this.registerservise.getFaculties();
}

getAllDepartments(){
  return this.registerservise.getDepartments();
}
getAllDegree(){
  return this.registerservise.getDegrees();
}
  getUserList(){
    return this.memberList;
  }

  getDepartmentByFacultyID(facId:any){
    console.log(facId);
    return this.registerservise.getDepartmentByFacultyID(facId);
  }

  getDegreeByDepartmentID(depId:any){
    return this.registerservise.getDegreeByDepartmentID(depId);
  }
getAllMembersByFaculty(facId:any){
console.log(facId+"getAllMembersByFaculty");
return this.http.get('/users?faculty_id=' + facId).map((response: Response) => response.json());
}
getAllMembersByDepartment(depmentId:any){
console.log(depmentId+"getAllMembersByDepartment");
return this.http.get('/users?department_id='+ depmentId).map((response: Response) => response.json());
}
getAllMembersByDegree(degreeId:any){
  console.log(degreeId+"getAllMembersByDegree");
  return this.http.get('/users?degree_id='+ degreeId).map((response: Response) => response.json());
}
facultyobjdata;
departmentobjdata;
degreeobjdata;
getAllMembersBydegreeDepartmentFaculty(memberobject: any) {
  if(memberobject.txtName !== ""){
    return this.http.get('/users?q='+memberobject.txtName).map((response: Response) => response.json());
  }else{
    if(memberobject.facId !== ""){
      return this.http.get('/users?faculty_id=' + memberobject.facId).map((response: Response) => response.json());
    }
    if(memberobject.depId !== ""){
      return this.http.get('/users?department_id='+ memberobject.depId).map((response: Response) => response.json());
    }
    if(memberobject.degId !== ""){
      return this.http.get('/users?degree_id='+ memberobject.degId).map((response: Response) => response.json());
    }
  }

}

uploadCsv(url:any,formData:any){
  let headers = new Headers();
  // headers.append('Authorization','Barer',this.auth.getToken());
  // headers.append('enctype','multipar/form-data');
  return this.http.post(url,formData,{headers:headers})
}
}