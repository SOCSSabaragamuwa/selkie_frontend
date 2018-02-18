import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
id=1;
  constructor( private router:Router) { }

  ngOnInit() {
  }
userEdit(id:any){

  this.router.navigate(['admin/event/edit',id]);
}
}
