import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  

  private subscription: Subscription;
  private eventid:number;
  @Output() eventdataobj = new EventEmitter<any>();
  eventObj:any;

  constructor(private route:ActivatedRoute, private router:Router,private eventService:EventService) { }

  ngOnInit() {

    
    this.subscription = this.route.params.subscribe(
      (params: any) => {

        this.eventid = params['id'];
     this.eventObj=  this.eventService.getEventDetails(this.eventid);
      console.log(this.eventObj);
      
      });
  }
  eventEdit(id:any){
    console.log(id);
    this.router.navigate(['event',id]);

  }
}
