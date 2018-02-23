import { Routes } from "@angular/router";
import { UserprofileComponent } from "./userprofile.component";
import { UserdetailComponent } from "./userdetail.component";
import { UsereditComponent } from "./useredit.component";


export const  UserRouting: Routes = [
    { path:'',component: UserprofileComponent},
    { path:':id',component: UserprofileComponent},
    { path: 'edit/:id', component:UsereditComponent },
    // { path: ':id', component:UserprofileComponent },
  
    
    
    
  ];