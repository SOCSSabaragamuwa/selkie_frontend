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

  errorMessage:any;
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
if(data.access_token !== ""){
  this.loginService.StoreToken(data);
}
if(localStorage.getItem('access_token') !== ""){
  this.router.navigate(['/admin']);
}
    },err=>{
      this.errorMessage=err._body;
      this.errorMessage= JSON.parse(this.errorMessage);
      this.errorMessage=this.errorMessage.message;
       console.log(this.errorMessage);
    });
  }

}
