import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  
  userList:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userList=this.userService.getUserList();
    console.log(this.userList);
  }

}
