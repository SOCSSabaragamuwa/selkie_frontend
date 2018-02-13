import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-userprofilelist',
  templateUrl: './userprofilelist.component.html',
  styleUrls: ['./userprofilelist.component.css']
})
export class UserprofilelistComponent implements OnInit {

  constructor(private userService:UserService) { }
  userList;

  ngOnInit() {
  }

}
