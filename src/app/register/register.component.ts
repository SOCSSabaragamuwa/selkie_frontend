import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register={

    firstName:"",
    lastName:"",
    birthDay:"",
    gender:"",
    email:"",
    username:"",
    password:"",
    confirmPassword:"",
    university:"",
    faculty:"",
    department:""
  }

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
    
  ];

  universities=[
    {value: 'sabra', viewValue: 'Sabargamuwa'},
    {value: 'pera', viewValue: 'Peradeniya'}
  ];
  constructor(private registerService:RegisterService) { 

  }

  ngOnInit() {
  }

  onRegister(){
    this.registerService.postRegister(this.register);
  }
}
