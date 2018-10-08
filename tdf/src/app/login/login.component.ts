import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EnrollmentService} from './enrollment.service';
import {user} from './userModel'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private enroll:EnrollmentService) { }
  errorMsg= '';
newUser=new user('','');
  ngOnInit() {
  }

  onSubmit(){
    this.enroll.enroll(this.newUser)
    .subscribe(              //come response via service from backend 
      resp => {
                  console.log('Success!', resp)

                  window.location.href = "admin"; 
        
      },

      
      error=> {
        this.errorMsg = error.statusText;
        console.log('Error!', this.errorMsg);
        alert("Wrong Credentials!");
      }
    )
  }

}
