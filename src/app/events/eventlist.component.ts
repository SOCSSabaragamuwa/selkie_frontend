import { Component, OnInit } from '@angular/core';
import { Eventobj } from './eventobj';
import { EventService } from './event.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

    eventList:Eventobj[]=[];
  constructor(private eventService:EventService) { }

  ngOnInit() {

    this.eventList=this.eventService.getAllEventData();
    console.log(this.eventList);
  }

}
