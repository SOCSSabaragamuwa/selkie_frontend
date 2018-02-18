import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RegisterService } from './register.service';
import { MatDialog } from '@angular/material';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  facChooser:boolean=false;
  depChooser:boolean=false;
  degChooser:boolean=false;
  facultyID;
  departmentID;
  departments: any[] = [{  value: 'not selected', viewValue: 'Please select a faculty' }];
  degrees: any[]=[];
  register: Register = {

    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    faculty: "",
    department: "",
    degree: ""
  }

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }

  ];

  universities = [
    { value: 'sabra', viewValue: 'Sabargamuwa' },
    { value: 'pera', viewValue: 'Peradeniya' }
  ];

  departmentList = [
    { depId: 1, value: 'food', viewValue: 'Food', facId: 1 },
    { depId: 2, value: 'nr', viewValue: 'Nr ', facId: 2 }
  ];

  degreeList = [
    { degId: 1, value: 'cis', viewValue: 'Bsc in computing and info',depId: 1 },
    { degId: 2, value: 'pst', viewValue: 'Nr',depId: 2 }
  ];

  faculties = [
    { facId: 1, value: 'fac', viewValue: 'Apllied sciences' },
    { facId: 2, value: 'fam', viewValue: 'Managment' },
    
  ];
  constructor(private registerService: RegisterService,public dialog: MatDialog) {

  }

  ngOnInit() {


  }

  onRegister() {
    this.registerService.postRegister(this.register);
  }

  departmentOfFaculty(faclId: any) {
    this.facultyID = faclId;
    if (this.facultyID) {
      this.departments = [];
      for (let i = 0; i < this.departmentList.length; i++) {

        if (this.departmentList[i].facId == this.facultyID) {

          if (this.departments.indexOf(this.departmentList[i]) == -1) {

            this.departments.push(this.departmentList[i]);
          }

        }
      }
    }

  }


  degreeOfDepartment(departmentID: any) {
    this.departmentID = departmentID;
    if (this.departmentID) {
      this.degrees = [];
      for (let i = 0; i < this.degreeList.length; i++) {

        if (this.degreeList[i].depId == this.departmentID) {

          if (this.degrees.indexOf(this.degreeList[i]) == -1) {

            this.degrees.push(this.degreeList[i]);

            console.log(this.degrees);
          }

        }
      }
    }
    console.log("hi my name");
  }

  
  openFacChooser(){
    return this.facChooser=!this.facChooser;

  }

  openDepChooser(){
    return this.depChooser=!this.depChooser;

  }

  openDegChooser(){
    return this.degChooser=!this.degChooser;

  }
    
  


  

}
