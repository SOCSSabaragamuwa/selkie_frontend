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
<<<<<<< HEAD
    firstName:"",
    lastName:"",
    birthDay:"",
    gender:"",
    email:"",
    username:"",
    password:"",
    confirmPassword:""
  }

  gender = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
    
  ];
=======
    firstName:"sathira"
  }
>>>>>>> added login components and register components
  constructor(private registerService:RegisterService) { 

  }

  ngOnInit() {
  }

  onRegister(){
    this.registerService.postRegister(this.register);
  }
}
