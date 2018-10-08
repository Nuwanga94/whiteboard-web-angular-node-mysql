import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from './enrollment.service';
import {User} from './view-model'
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private enroll:EnrollmentService) { }
  errorMsg= '';
  view:User[];
  ngOnInit() {
    this.enroll.getData()
    .subscribe(
      resp => {
                  console.log('Success!', resp);
                  this.view=resp;
                  console.log(this.view[0].email);
                  //window.location.href = "student"; 
        
      },

      
      error=> {
        this.errorMsg = error.statusText;
        console.log('Error!', this.errorMsg);
      }
    )
  }
  }


