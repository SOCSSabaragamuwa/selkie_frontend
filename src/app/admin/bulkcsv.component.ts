import { Component, OnInit } from '@angular/core';
import { UserService } from '../userprofile/user.service';

@Component({
  selector: 'app-bulkcsv',
  templateUrl: './bulkcsv.component.html',
  styleUrls: ['./bulkcsv.component.css']
})
export class BulkcsvComponent implements OnInit {
  url:string='/users/bulk';
  constructor(userservice:UserService) { }

  ngOnInit() {
    
  }


  onChange(event){
    let files= event.srcElement.files
    console.log(files);
    let formDate =new FormData();
    
    
  }

}
