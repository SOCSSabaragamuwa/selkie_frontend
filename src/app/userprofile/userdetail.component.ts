import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { UserprofileComponent } from './userprofile.component';
import { UserprofilelistComponent } from './userprofilelist.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
   userId:any;
  userList:User;
  userObj:any;
  message = "sssssss";
  constructor( private router:Router,private userService:UserService,private loginService:LoginService) { }

  ngOnInit() {

    this.userId=window.location.href;
    let url:any[];
    url=this.userId.split("/");
    this.userId=url[url.length-1];
    console.log(this.userId);    
    if(this.userId){
      this.loginService.getUserById(this.userId).subscribe(data => this.userObj = data);
      
    }else{
      this.loginService.getUserDetails().subscribe(data => this.userObj = data);
console.log("else");
    }
  
  }
userEdit(){
  let url:any[];
  url=this.userId.split("/");
  this.userId=url[url.length-1];
  let id=this.userId;
  this.router.navigate(['user/edit',id]);
}
}
