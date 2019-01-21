import { Component, OnInit } from '@angular/core';

//import { Component } from '@angular/core';
import { User } from './user';
import{ EnrollmentService } from './enrollment.service';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

//export class AppComponent {
  types=['Student', 'Teacher', 'Admin'];
  typeHasError = true;
  submitted = false;
  errorMsg= '';

  emailPattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//    e = document.getElementById("ddlViewBy");
// strUser = this.e.options[this.e.selectedIndex].value;
id;
userModel= new User( '','','','' ,  '' , '', '', '','','','','y' );
//user= new User('default', '','','' ,  '' , '', '', false);
constructor(private _enrollmentService: EnrollmentService,private router:Router,private route:ActivatedRoute){}

ngOnInit(){
  this.id=this.route.snapshot.paramMap.get('id');
}

validateTopic(value){
  if (value === 'default'){
    this.typeHasError = true;

  }else{
    this.typeHasError = false;
  }
}

onSubmit(){
  
 
  //this.submitted = true;










if(this.userModel.Password==this.userModel.RePassword){
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    resp => {
      // this.id=resp;

      // window.location.href = "./"; 
      this.router.navigate(['admin',this.id,'ppic']);

},









error=> {
this.errorMsg = error.statusText;
console.log('Error!', this.errorMsg);
}
)
}else{
  alert("Password mismatched!");

}
  
}

}
