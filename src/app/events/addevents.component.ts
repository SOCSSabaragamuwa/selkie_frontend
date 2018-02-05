import { Component, OnInit } from '@angular/core';
import { Eventobj } from './eventobj';
import { Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent implements OnInit {

  eventObj: Eventobj = {
    eventName: "firstEvent",
    eventLocation:"location",
    date:"",
    time:"",
    longDes:"this",
    shortDes:"sathira"

  }
  constructor(private eventService:EventService,private router:Router) { }



  ngOnInit() {
  }
  onSubmit() {
    this.eventService.setMethod(this.eventObj);
    // console.log(this.eventObj);
    this.router.navigate(['/event'])
  }
}
