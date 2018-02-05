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


const APP_ROUTE_PROVIDER: Routes = [

    
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'careers',component:CarriersComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'event',component:EventsComponent,children:EventRouting},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',redirectTo:'home',pathMatch:'full'}

    ];

    export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);