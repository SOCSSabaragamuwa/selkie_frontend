import { Component, OnInit } from '@angular/core';
import { Eventobj } from '../events/eventobj';
import { EventService } from '../events/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admineventlist',
  templateUrl: './admineventlist.component.html',
  styleUrls: ['./admineventlist.component.css']
})
export class AdmineventlistComponent implements OnInit {

  eventList:Eventobj[]=[];
  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit() {

    this.eventList=this.eventService.getAllEventData();
    console.log(this.eventList);
  }

  eventEdit(id:any){
    console.log(id);
    this.router.navigate(['admin/event/edit',id]);

  }
}
