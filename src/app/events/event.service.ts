import { Injectable } from '@angular/core';
import { Eventobj } from './eventobj';
@Injectable()
export class EventService {
  eventList:Eventobj[]=[
    {
    id:1,
<<<<<<< HEAD

    eventName:"Hackthon",
=======
    eventName:"EventOne",
>>>>>>> added login components and register components
    eventLocation:"location",
    date:"asd",
    time:"asfa",
    longDes:"this",
    shortDes:"let me hack"
    },
     {
      id:2,
<<<<<<< HEAD
      eventName:"FortNight",

=======
      eventName:"EventTwo",
>>>>>>> added login components and register components
      eventLocation:"location",
      date:"",
      time:"",
      longDes:"this",
<<<<<<< HEAD

      shortDes:"second fort night"
     },

=======
      shortDes:""
     },
>>>>>>> added login components and register components
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
