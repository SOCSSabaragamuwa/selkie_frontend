import {Routes} from '@angular/router';

import { AddeventsComponent } from './addevents.component';

import { EventlistComponent } from './eventlist.component';



export const EventRouting: Routes = [
  { path: '', component: EventlistComponent},
  { path: 'add', component: AddeventsComponent}

  
];