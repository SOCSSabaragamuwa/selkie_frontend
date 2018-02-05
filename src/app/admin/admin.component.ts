import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

<<<<<<< HEAD
declare var $: any


=======
>>>>>>> added login components and register components
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD

  constructor(private router: Router) { }

  ngOnInit() {
    $('#list-item-one').click(function () {

      $('.sub-list-one').slideToggle(500, function () {
        if ($('.list-item-icon-one').next().is(':visible')) {
          $('#list-item-one').css({
             'border-left': '5px solid yellow',
              color:'yellow' 
            });
        }
        else {
          $('#list-item-one').css({ 
            'border-left': '0px',
            color:'white'
        });
        }
      });
    });

    $('#list-item-two').click(function () {

      $('.sub-list-two').slideToggle(500, function () {
        if ($('.list-item-icon-two').next().is(':visible')) {
          $('#list-item-two').css({ 
            'border-left': '5px solid yellow',
            color:'yellow' 
           });

           

        }
        else {
          $('#list-item-two').css({
             'border-left': '0px',
             color:'white' 
             });
        }
      });
    });

    

   
  }

  showEvent() {
    this.router.navigate(['/admin/event']);
  }
  addEvent() {

=======
  constructor( private router:Router) { }

  ngOnInit() {
  }

  showEvent(){
    this.router.navigate(['/admin/event']);
  }
  addEvent(){
>>>>>>> added login components and register components
    this.router.navigate(['/admin/event/addevent']);
  }

}
