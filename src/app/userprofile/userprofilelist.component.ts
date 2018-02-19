import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userprofilelist',
  templateUrl: './userprofilelist.component.html',
  styleUrls: ['./userprofilelist.component.css']
})
export class UserprofilelistComponent implements OnInit {
  faculties = [
    { facId: 1, value: 'fac', viewValue: 'Apllied sciences' },
    { facId: 2, value: 'fam', viewValue: 'Managment' },
  ];
   userId;
  usersList;
  searchResult ={
    facName:"applied",
    depName:"cis",
    degName:"is",
    txtName:"mangament"
  }
  // tslint:disable-next-line:whitespace
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
    this.userService.getAllMembers().subscribe(data => this.usersList = data.users
    );
  }

  showUser(url:any){
    let temp:any[]=url.split("/");
    let id :any=temp[temp.length-1];
    console.log(id);
    this.userId=id;
    this.router.navigate(['/user',id]);
  }

  onSubmit(){
    console.log(this.searchResult);
  }
 
}
