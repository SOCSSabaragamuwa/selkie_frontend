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
  location:any;

  eventObj: Eventobj = {
    id:0,
    eventName: "firstEvent",
    eventLocation:"location",
    date:"",
    time:"",
    description:"this",
    start_at:""
    

  }
  constructor(private eventService:EventService,private router:Router) { }



  ngOnInit() {


  }
  onSubmit() {
       
    this.eventObj.start_at=this.eventObj.date+this.eventObj.time;
    this.eventObj.eventLocation=this.location;
    this.eventService.setMethod(this.eventObj);
    console.log(this.eventObj);
    this.router.navigate(['admin/event'])
  }

  autoCompleteCallback1(selectedData:any) {
    this.location=selectedData.data.geometry.location;
    console.log(this.location);
	}
}
