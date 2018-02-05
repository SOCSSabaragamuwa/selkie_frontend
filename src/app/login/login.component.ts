import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
>>>>>>> added login components and register components

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD

  constructor(private loginService:LoginService,private router:Router) { }

=======
  constructor(private loginService:LoginService,private router:Router) { }

>>>>>>> added login components and register components
  login : Login={
    username:"sathira",
    password:'*******'
  }
<<<<<<< HEAD

=======
>>>>>>> added login components and register components


  ngOnInit() {
  }

<<<<<<< HEAD

=======
>>>>>>> added login components and register components
  // userLogin(){
  //   this.router.navigate(['/login']);
  // }

  onSubmit(){
    this.loginService.sendData(this.login);
  }

<<<<<<< HEAD

=======
>>>>>>> added login components and register components
}
