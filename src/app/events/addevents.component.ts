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
  locationobj:any;
errorMessage;
errorState;
errorobj;
  eventObj: any = {
    name: "firstEvent",
    location:"location",
    date:"",
    time:"",
    description:"this",
    start_at:""
  }
  constructor(private eventService:EventService,private router:Router,private datePipe: DatePipe) { }



  ngOnInit() {
  }
  onSubmit() {

    this.eventObj.name=this.eventObj.name;
    this.eventObj.date=this.datePipe.transform(this.eventObj.date,'yyyy-dd-MM');
    this.eventObj.start_at=this.eventObj.date+"T"+this.eventObj.time+":00";
    console.log(this.eventObj.date); 
    // this.eventObj.location="lat:"+this.locationobj.lat+",lon:"+this.locationobj.lng;
    this.eventService.setMethod(this.eventObj).subscribe(data => {
      console.log(data);
      // Display the received data
      this.errorMessage = "Data is inserted"
    },
      err => {
        this.errorMessage = err._body.error;
        console.log(err);
        if(err.status === 401){
          // console.log("true");
          // if( localStorage.getItem('access_token') !== ""){

          // }
           this.router.navigate(['/login']);
        }
      // yourPopupmethod(err)
      } );
    console.log(this.eventObj);
    // this.router.navigate(['admin/event'])
  }

  autoCompleteCallback1(selectedData:any) {
    this.locationobj=selectedData.data.geometry.location;
    console.log(this.locationobj);
	}
}
