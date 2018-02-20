import { Injectable } from '@angular/core';
import { Eventobj } from './eventobj';
@Injectable()
export class EventService {
  eventList:Eventobj[]=[
    {
    id:1,
    eventName:"Let Me Hack ",
    eventLocation:"Sabaragamuwa university of Srilanka",
    date:"24/2/2018",
    time:"9.00am",
    description:"Platform hackthon",
    start_at:""
  
    },
     {
      id:2,
      eventName:"Fort Night",
      eventLocation:"Sabaragamuwa university of Srilanka",
      date:"9/5/2018",
      time:"6.00pm",
      description:"Introduction to new tech and ha a soft skill sesion",
      start_at:""
     
     },

    // {eventName:"EventThree"}
  ]

  constructor() { }

  setMethod(event:any){
    console.log(event);
    this.eventList.push(event);
  }
  getAllEventData(){
    return this.eventList;
  }

  getEventDetails(eventId:any){
    for(let i=0;i<this.eventList.length;i++){
      if(this.eventList[i].id==eventId){
        console.log(this.eventList[i]);
        return this.eventList[i];
      }
    }
  }

}
