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

   
  }

  addEvent(){
    this.router.navigate(['/event/add']);
  }

}
