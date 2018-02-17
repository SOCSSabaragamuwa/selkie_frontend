import {Routes} from '@angular/router';
import { AdminComponent } from './admin.component';
import { EventlistComponent } from '../events/eventlist.component';
import { AdminhomeComponent } from './adminhome.component';
import { AdmineventlistComponent } from './admineventlist.component';
import { AddeventsComponent } from '../events/addevents.component';
import { RegisterComponent } from '../register/register.component';
import { EditeventComponent } from '../events/editevent.component';





export const AdminRouting: Routes = [
  { path: '', component: AdminhomeComponent},
  { path: 'event', component: AdmineventlistComponent},
  { path: 'event/addevent', component:AddeventsComponent},
  {path:'event/adduser',component:RegisterComponent},
  {path:'event/edit/:id',component:EditeventComponent}
  


  
];