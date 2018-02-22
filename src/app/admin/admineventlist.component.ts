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

  eventList:any[]=[];
  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit() {
    this.eventService.getAllEventData().subscribe(data => {this.eventList = data.events;console.log(data.events);},err=>{console.log(err);
      if(err.status === 401){
        this.router.navigate(['/login']);
      }
    });
    console.log(this.eventList);
  }

  eventEdit(id:any){
    console.log(id);
    this.router.navigate(['admin/event/edit',id]);

  }
}
