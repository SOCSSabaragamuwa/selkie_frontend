import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { UserprofileComponent } from './userprofile.component';
import { UserprofilelistComponent } from './userprofilelist.component';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
   userId:any;
  userList:User;
  constructor( private router:Router,private userService:UserService) { }

  ngOnInit() {

    this.userList=this.userService.getUserList();
    console.log(this.userList);
    this.userId=window.location.href;
  
  }
userEdit(){
  let url:any[];
  url=this.userId.split("/");
  this.userId=url[url.length-1];
  let id=this.userId;
  this.router.navigate(['user/edit',id]);
}
}
