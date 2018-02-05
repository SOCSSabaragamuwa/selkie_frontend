import { Injectable } from '@angular/core';
import { Eventobj } from './eventobj';
@Injectable()
export class EventService {
  eventList:Eventobj[]=[
    {
    id:1,
    eventName:"EventOne",
    eventLocation:"location",
    date:"",
    time:"",
    longDes:"this",
    shortDes:""
    },
     {
      id:2,
      eventName:"EventTwo",
      eventLocation:"location",
      date:"",
      time:"",
      longDes:"this",
      shortDes:""
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
