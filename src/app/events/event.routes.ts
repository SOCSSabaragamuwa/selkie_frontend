import {Routes} from '@angular/router';

import { AddeventsComponent } from './addevents.component';

import { EventlistComponent } from './eventlist.component';
import { EditeventComponent } from './editevent.component';
import { EventComponent } from './event.component';



export const EventRouting: Routes = [
  { path: '', component: EventlistComponent},
  { path: 'add', component: AddeventsComponent},
  {path:':id',component:EventComponent}
  
  
  
];