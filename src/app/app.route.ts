import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsouelComponent } from './carsouel/carsouel.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { CarriersComponent } from './carriers/carriers.component';
import { EventsComponent } from './events/events.component';
import { EventRouting } from './events/event.routes';
import { AdminComponent } from './admin/admin.component';
import { AdminRouting } from './admin/admin.route';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofilelistComponent } from './userprofile/userprofilelist.component';
import { UserRouting } from './userprofile/user.routes';







const APP_ROUTE_PROVIDER: Routes = [

    
    {path:'home',component:HomeComponent},
    {path:'userprofile',component:UserprofilelistComponent},
    {path:'register',component:RegisterComponent},
    {path:'blog',component:BlogComponent},
    {path:'news',component:NewsComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent,children:AdminRouting},
    {path:'user',component:UserprofileComponent,children:UserRouting},
    {path:'aboutus',component:AboutusComponent},
    {path:'event',component:EventsComponent,children:EventRouting},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',redirectTo:'home',pathMatch:'full'}

    ];

    export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);