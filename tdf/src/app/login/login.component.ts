import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EnrollmentService} from './enrollment.service';
import {user} from './userModel';
import {User} from './user'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private enroll:EnrollmentService,private router:Router) { }
  errorMsg= '';
  user:User;
  type;
  id;
newUser=new user('','','');
  ngOnInit() {
    
  }


  onSubmit(){
    this.type=this.newUser.type;
    this.enroll.enroll(this.newUser)
    .subscribe(              //come response via service from backend 
      (data:User)=> {
                  this.user=data;
                  console.log(this.user.aId);
                  this.id=this.user.aId;
                  if(this.type=='admin'){
                    this.router.navigate(['admin',this.id,'ppic']);
                  }else if(this.type=='student'){
                    this.router.navigate(['student',this.id,'ppic']);
                  }else if(this.type=='teacher'){
                    this.router.navigate(['teacher',this.id,'ppic']);

                  }
                  //window.location.href = "admin"; 
        
      },

      
      error=> {
        this.errorMsg = error.statusText;
        console.log('Error!', this.errorMsg);
        alert("Wrong Credentials!");
      }
    )
  }

}
