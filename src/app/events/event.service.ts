import { Injectable } from '@angular/core';
import { Eventobj } from './eventobj';
@Injectable()
export class EventService {
  eventList:Eventobj[]=[
    {
    id:1,
    eventName:"Hackthon",
    eventLocation:"location",
    date:"asd",
    time:"asfa",
    longDes:"this",
    shortDes:"let me hack"
    },
     {
      id:2,
      eventName:"FortNight",
      eventLocation:"location",
      date:"",
      time:"",
      longDes:"this",
      shortDes:"second fort night"
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

}
