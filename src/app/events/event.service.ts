import { Injectable } from '@angular/core';
import { Eventobj } from './eventobj';
@Injectable()
export class EventService {
  eventList:Eventobj[]=[
    {
    eventName:"EventOne",
    eventLocation:"location",
    date:"",
    time:"",
    longDes:"this",
    shortDes:""
    },
    // {eventName:"EventTwo"},
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
