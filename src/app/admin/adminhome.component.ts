import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evvntobj } from '../events/evvntobj';
import { EventService } from '../events/event.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private eventService:EventService,private adminService:AdminService){

  }
   eventList:any[]=[];
   userList:any[]=[];
  ngOnInit() {
    

    this.adminService.getAllUsers().subscribe(data=>{this.userList=data.users;},err=>console.log(err));
    console.log(this.eventList);
  }
  

}
