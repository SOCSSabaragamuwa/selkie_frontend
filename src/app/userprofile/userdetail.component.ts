import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  
  userList:User;
  constructor( private router:Router,private userService:UserService) { }

  ngOnInit() {

    this.userList=this.userService.getUserList();
    console.log(this.userList);
  
  }
userEdit(id:any){

  this.router.navigate(['user/edit',id]);
}
}
