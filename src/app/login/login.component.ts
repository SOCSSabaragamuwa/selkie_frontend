import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private loginService:LoginService) { }

  // login : Login={
  //   username:"sathira",
  //   password:'*******'
  // }

  

  ngOnInit() {
  }
  // onSubmit(){
  //   // console.log(this.login);
  //   this.loginService.name(this.login);
  // }

}
