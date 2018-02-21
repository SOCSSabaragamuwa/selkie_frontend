import { Component, OnInit } from '@angular/core';
import { Eventobj } from './eventobj';
import { Router } from '@angular/router';
import { EventService } from './event.service';
import { DatePipe } from '@angular/common';

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
  constructor(private eventService:EventService,private router:Router,private datePipe: DatePipe) { }



  ngOnInit() {


  }
  onSubmit() {
       
    
    this.eventObj.eventLocation=this.location;
    this.eventObj.date=this.datePipe.transform(this.eventObj.date,'yyyy-dd-MM');
    this.eventObj.start_at=this.eventObj.date+"T"+this.eventObj.time+":00)";
    console.log(this.eventObj.date);
    
    this.eventObj.eventLocation="lat:"+this.location.lat+",lon:"+this.location.lng;
    this.eventService.setMethod(this.eventObj);
    console.log(this.eventObj);
    this.router.navigate(['admin/event'])
  }

  autoCompleteCallback1(selectedData:any) {
    this.location=selectedData.data.geometry.location;
    console.log(this.location);
	}
}
