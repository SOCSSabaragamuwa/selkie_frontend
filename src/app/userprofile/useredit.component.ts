import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }

  ];

  eventList:User ;
  constructor( private userService:UserService) { }

  ngOnInit() {
    this.eventList=this.userService.getUserList();
    console.log(this.eventList);
  }

}
