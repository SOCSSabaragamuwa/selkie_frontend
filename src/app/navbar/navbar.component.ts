import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginServise: LoginService,private router:Router) { }

  ngOnInit() {
  }

  LogOut(){
this.loginServise.LogOutdata();
this.router.navigate(['/login']);
  }

}
