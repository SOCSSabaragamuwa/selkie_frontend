import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private subscription: Subscription;
  private eventid:number;
  @Output() eventdataobj = new EventEmitter<any>();
  eventobj:any;
  constructor(private route:ActivatedRoute, private router:Router,private eventService:EventService) { }

  ngOnInit() {


    console.log("hellow");
    this.subscription = this.route.params.subscribe(
      (params: any) => {

        this.eventid = params['id'];
    //  this.eventobj=  this.eventService.getEventDetails(this.eventid);
      // console.log(this.eventobj);
      
      });

  }

  addEvent(){
    this.router.navigate(['/event/add']);
  }

}
