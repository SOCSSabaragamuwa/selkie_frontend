import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }

  ];
  private userId:number;
  eventList:User ;
  constructor( private userService:UserService,private route:ActivatedRoute) { }

  private subscription: Subscription;
  @Output() eventdataobj = new EventEmitter<any>();

  ngOnInit() {
    


   this.subscription = this.route.params.subscribe(
      (params: any) => {
        console.log(params);
        this.userId = params['id'];
        console.log(this.userId);
        this.show(this.userId);
      
      });
  }

show(id:any){
  console.log(id);
}

}
