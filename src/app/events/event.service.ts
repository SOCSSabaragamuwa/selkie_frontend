import { Injectable } from '@angular/core';
import { Eventobj } from './eventobj';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginService } from '../login/login.service';
@Injectable()
export class EventService {

  constructor(private http: Http,private loginServise:LoginService) { }

  setMethod(event:any){
    this.loginServise.createAuthenticationHeader();
    return this.http.post('/events', event, this.loginServise.options).map((response: Response) => response.json());
  }
  getAllEventData(){
    this.loginServise.createAuthenticationHeader();
    return this.http.get('/events', this.loginServise.options).map((response: Response) => response.json());
  }

  getEventDetails(eventId:any){
  }

}
