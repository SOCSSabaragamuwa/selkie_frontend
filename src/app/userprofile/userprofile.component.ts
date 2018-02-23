import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userId:any;
userObj;
  constructor(private userService: UserService,private loginService:LoginService ) { }




  ngOnInit() {
    this.userId=window.location.href;
    let url:any[];
    url=this.userId.split("/");
    this.userId=url[url.length-1];
    console.log(this.userId);
   // this.loginService.getUserById(this.userId).subscribe(data => { console.log(data); });
   if(this.userId == "user"){
     console.log("user by id");
     this.loginService.getUserDetails().subscribe(data => { this.userObj = data ;} );
     
   }else{
     console.log("user by login");
     this.loginService.getUserById(this.userId).subscribe(data => { this.userObj = data ;} );
     
   }

  }


}
