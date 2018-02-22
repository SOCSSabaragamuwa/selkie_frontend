import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evvntobj } from '../events/evvntobj';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private eventService:EventService){

  }
   eventList:any[]=[];
  ngOnInit() {

    //this.eventList=this.eventService.getAllEventData();
    console.log(this.eventList);
  }
  

}
