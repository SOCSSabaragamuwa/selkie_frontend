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

  facChooser: boolean = false;
  depChooser: boolean = false;
  degChooser: boolean = false;
  errorFaculty;
  errorDepartment;
  errorDegree;
  facultyID;
  departmentID;
  departments: any[] = [{ value: 'not selected', viewValue: 'Please select a faculty' }];
  degrees: any[] = [];
  register: Register = {
    first_name: "",
    last_name: "",
    birthDay: "",
    role: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    faculty_id: "",
    department_id: "",
    degree_id: "",
    mobile: ""
  }

  Addregister: any = {
    name: ""
  }

  AddDepartment: any = {
    name: "",
    faculty_id: ""
  }

  AddDegree: any = {
    name: "",
    department_id: ""
  }
  addFaculty() {
    console.log(this.Addregister);
    this.registerService.postFaculty(this.Addregister).subscribe(data => {console.log(data);
      this.errorFaculty="Data inserted";
    },err=>{
      this.errorFaculty = err._body;
      this.errorFaculty = JSON.parse(this.errorFaculty);
      this.errorFaculty = this.errorFaculty.message;
      console.log(this.errorFaculty);
    });
    this.registerService.getFaculties().subscribe(data => this.faculties = data.faculties);
  }

  addDepartment() {
    console.log(this.AddDepartment);
    this.registerService.postDepartment(this.AddDepartment).subscribe(data => {console.log(data);
      this.errorDepartment="Data inserted";
    },err=>{
      this.errorDepartment = err._body;
      this.errorDepartment = JSON.parse(this.errorDepartment);
      this.errorDepartment = this.errorDepartment.message;
      console.log(this.errorDepartment);
    });
    // this.registerService.getDepartments().subscribe(data => this.departmentList = data.departments);
    this.registerService.getDepartments().subscribe(data => this.departmentList = data.departments);
  }

  addDegree() {
    console.log(this.AddDegree);
    this.registerService.postDegree(this.AddDegree).subscribe(data => {console.log(data);
      this.errorDegree="Data inserted";
    },err=>{
      this.errorDegree = err._body;
      this.errorDegree = JSON.parse(this.errorDegree);
      this.errorDegree = this.errorDegree.message;
      console.log(this.errorDegree);
    });
    this.registerService.getDegrees().subscribe(data => this.degrees = data.degrees);
  }


  role = [
    { value: 'user', viewValue: 'User' },
    { value: 'moderator', viewValue: 'Moderator' }

  ];

  universities = [
    { value: 'sabra', viewValue: 'Sabargamuwa' },
    { value: 'pera', viewValue: 'Peradeniya' }
  ];
  departmentList;
  // departmentList = [
  //   { depId: 1, value: 'food', viewValue: 'Food', facId: 1 },
  //   { depId: 2, value: 'nr', viewValue: 'Nr ', facId: 2 }
  // ];
  // degreeList;
  degreeList;
  //  degreeList = [
  //     { degId: 1, value: 'cis', viewValue: 'Bsc in computing and info',depId: 1 },
  //      { degId: 2, value: 'pst', viewValue: 'Nr',depId: 2 }
  //    ];
  errorMessage: any;
  faculties;
  departmentslistobj: any[] = [];
  // faculties = [
  //   { facId: 1, value: 'fac', viewValue: 'Apllied sciences' },
  //   { facId: 2, value: 'fam', viewValue: 'Managment' },
  // ];
  constructor(private registerService: RegisterService, public dialog: MatDialog) {

  }


  ngOnInit() {
    this.registerService.getFaculties().subscribe(data => this.faculties = data.faculties);
    this.registerService.getDepartments().subscribe(data => this.departmentList = data.departments);
    this.registerService.getDegrees().subscribe(data => this.degrees = data.degrees);



  }

  onRegister() {

    if (this.register.password === '') {
      delete this.register.password;
    }

    if (this.register.role === '') {
      delete this.register.role;
    }

    if (this.register.department_id === '') {
      delete this.register.department_id;
    }
    if (this.register.faculty_id === '') {
      delete this.register.faculty_id;
    }
    if (this.register.degree_id === '') {
      delete this.register.degree_id;
    }
    if (this.register.first_name === '') {
      delete this.register.first_name;
    }
    if (this.register.last_name === '') {
      delete this.register.last_name;
    }
    if (this.register.mobile === '') {
      delete this.register.mobile;
    }
    this.registerService.postRegister(this.register).subscribe(data => {
      console.log(data);
      // Display the received data
      this.errorMessage = "Data is inserted"
    },
      err => {
        this.errorMessage = err._body;
        this.errorMessage = JSON.parse(this.errorMessage);
        this.errorMessage = this.errorMessage.message;
        console.log(this.errorMessage);
        // yourPopupmethod(err)
      });
  }

  departmentOfFaculty(faclId: any) {
    console.log(faclId);
    this.facultyID = faclId;
    this.departmentslistobj = [];
    this.registerService.getDepartmentByFacultyID(this.facultyID).subscribe(data => { this.departmentslistobj = data.departments; });
    // if (this.facultyID) {
    //   this.departments = [];
    //   for (let i = 0; i < this.departmentList.length; i++) {

    //     if (this.departmentList[i].facId == this.facultyID) {

    //       if (this.departments.indexOf(this.departmentList[i]) == -1) {

    //         this.departments.push(this.departmentList[i]);
    //       }

    //     }
    //   }
    // }

  }

  degreeListObj: any[] = [];
  degreeOfDepartment(departmentID: any) {
    console.log(departmentID);
    this.departmentID = departmentID;
    this.degreeListObj = [];
    this.registerService.getDegreeByDepartmentID(this.departmentID).subscribe(data => { this.degreeListObj = data.degrees; });
  }


  openFacChooser() {
    return this.facChooser = !this.facChooser;

  }

  openDepChooser() {
    return this.depChooser = !this.depChooser;

  }

  openDegChooser() {
    return this.degChooser = !this.degChooser;

  }






}
