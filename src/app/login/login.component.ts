import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService:LoginService,private router:Router) { }

  login : Login={
    username:"",
    password:"",
    grant_type:"password",
    client_id:2,
    client_secret:"ZACAZyPfwyGdhtvhr6ARaZFzWn0uPaDXi7RSCBIb",
  }


  ngOnInit() {
  }

  // userLogin(){
  //   this.router.navigate(['/login']);
  // }

  onSubmit(){
    this.loginService.sendData(this.login).subscribe(data => {
console.log(data);
 this.loginService.StoreToken(data);
    });
  }

}
