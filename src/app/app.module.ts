import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule,MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
// import{RouterModule,Routes}from '@angular/router';
import { routing } from './app.route';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsouelComponent } from './carsouel/carsouel.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { CarriersComponent } from './carriers/carriers.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { TopeventsComponent } from './events/topevents.component';
import { EventlistComponent } from './events/eventlist.component';
import { AddeventsComponent } from './events/addevents.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EventService } from './events/event.service';
import { SearchfilterPipe } from './events/searchfilter.pipe';
import { AdminComponent } from './admin/admin.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { AdminhomeComponent } from './admin/adminhome.component';
import { AdmineventlistComponent } from './admin/admineventlist.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import {MatSelectModule} from '@angular/material/select';
import { EqualValidatorDirective } from './register/equal-validator.directive';
import { UserprofileComponent } from './userprofile/userprofile.component';



// const appRoutes:Routes=[
//   {path:'home',component:HomeComponent},
//   {path:'blog',component:BlogComponent},
//   {path:'aboutus',component:AboutusComponent},
//   {path:'',redirectTo:'home',pathMatch:'full'},
//   {path:'**',redirectTo:'home',pathMatch:'full'}
// ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    CarsouelComponent,
    FooterComponent,
    BlogComponent,
    AboutusComponent,
    NewsComponent,
    CarriersComponent,
    LoginComponent,
    EventsComponent,
    TopeventsComponent,
    EventlistComponent,
    AddeventsComponent,
    SearchfilterPipe,
    AdminComponent,
    AdminhomeComponent,
    AdmineventlistComponent,
    RegisterComponent,
    EqualValidatorDirective,
    UserprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [
    EventService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
