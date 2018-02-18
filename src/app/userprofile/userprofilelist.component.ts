import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-userprofilelist',
  templateUrl: './userprofilelist.component.html',
  styleUrls: ['./userprofilelist.component.css']
})
export class UserprofilelistComponent implements OnInit {
  usersList;
  // tslint:disable-next-line:whitespace
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.userService.getAllMembers().subscribe(data => this.usersList = data.users
    );
  }

}
