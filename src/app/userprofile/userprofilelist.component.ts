import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { SearchByfaculty } from './search-byfaculty';
import { SearchByDepartment } from './search-by-department';
import { SearchByDegree } from './search-by-degree';
declare var $: any;

@Component({
  selector: 'app-userprofilelist',
  templateUrl: './userprofilelist.component.html',
  styleUrls: ['./userprofilelist.component.css']
})
export class UserprofilelistComponent implements OnInit {
  faculties:any[]=[];
  departmetslist :any[] =[];
  degreelist:any[]= [];
  departmentListOffaculty:any[]=[];
  degreeListOfDepartment:any[]=[];
  searchMessage;
   userId;
  usersList;
  searchfacultyResult:SearchByfaculty ={
    facId:0,
  }
  searchDegreeResult:SearchByDegree ={
    degId:0,
  }
  searchDepartmentResult : SearchByDepartment={
    depId:0,
  }
  searchResult ={
    facId:"",
    depId:"",
    degId:"",
    txtName:""
  }
  // tslint:disable-next-line:whitespace
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {

    $(".toggle-faculty").click(function(){
      $(".close-card-faculty").slideToggle();
    });

    $(".toggle-department").click(function(){
      $(".close-card-department").slideToggle();
    });

    $(".toggle-degree").click(function(){
      $(".close-card-degree").slideToggle();
    });
    $(".toggle-advanced-search").click(function(){
      $(".close-card-advanced-search").slideToggle();
    });
    
    this.userService.getAllMembers().subscribe(data => this.usersList = data.users
    );
    this.userService.getAllFaculties().subscribe(data => this.faculties=data.faculties);
    this.userService.getAllDepartments().subscribe(data => this.departmetslist=data.departments);
    this.userService.getAllDegree().subscribe(data => this.degreelist=data.degrees);

  }

  toggle(){

    
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
    if(this.searchResult.txtName !== ""){
      this.searchMessage = "Search Fazy search";
    }
    this.usersList =[];
    this.userService.getAllMembersBydegreeDepartmentFaculty(this.searchResult).subscribe(data => this.usersList = data);
  }

  departmentOfFaculty(id:any){
    console.log(id+"faculty");
    this.departmetslist =[];
    this.searchResult.depId = "";
    this.searchResult.degId="";
    this.searchMessage = "search by faculty";
    this.userService.getDepartmentByFacultyID(id).subscribe(data => this.departmetslist = data);
  }

  degreeOfDepartment(id:any){
    console.log(id+"department");
    this.degreelist =[];
    this.searchResult.facId = "";
    this.searchMessage = "search by department";
    this.userService.getDegreeByDepartmentID(id).subscribe(data=>this.degreelist=data);
  }

  degreeClick(id:any){
    this.searchResult.facId = "";
    this.searchResult.depId = "";
    this.searchMessage = "search by degree";
  }
 
  onSearchfacultySubmit(){
    console.log(this.searchfacultyResult);
    this.usersList = [];
    this.userService.getAllMembersByFaculty(this.searchfacultyResult.facId).subscribe(data=>this.usersList=data.users);
  }

  onSearchdepartmentSubmit(){
   console.log(this.searchDepartmentResult);
   this.usersList = [];
   this.userService.getAllMembersByDepartment(this.searchDepartmentResult.depId).subscribe(data=>this.usersList=data.users);
  }

  onSearchdegree(){
    console.log(this.searchDegreeResult);
    this.usersList = [];
    this.userService.getAllMembersByDegree(this.searchDegreeResult.degId).subscribe(data=>this.usersList=data.users);
  }
}
