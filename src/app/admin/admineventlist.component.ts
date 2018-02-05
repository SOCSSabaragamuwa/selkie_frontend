import { Component, OnInit } from '@angular/core';
import { Eventobj } from '../events/eventobj';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-admineventlist',
  templateUrl: './admineventlist.component.html',
  styleUrls: ['./admineventlist.component.css']
})
export class AdmineventlistComponent implements OnInit {

  eventList:Eventobj[]=[];
  constructor(private eventService:EventService) { }

  ngOnInit() {

    this.eventList=this.eventService.getAllEventData();
    console.log(this.eventList);
  }

}
