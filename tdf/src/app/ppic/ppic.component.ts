import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {ActivatedRoute} from '@angular/router';
import {EnrollmentService} from './enrollment.service'
import {User} from './user'
import {user} from './userModel'
//import { user } from 'src/app/login/userModel';
@Component({
  selector: 'app-ppic',
  templateUrl: './ppic.component.html',
  styleUrls: ['./ppic.component.css']
})
export class PpicComponent implements OnInit {
id;type;
selectedFile= null;
newUser:User;
user:user;
  constructor(private route:ActivatedRoute,private getAdmin:EnrollmentService) { }
  url="http://rakcollege.agiuae.com/wp-content/uploads/2015/07/gent-300x300.png";
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
    this.newUser= new User(this.id,this.type);

    



    var config = {
      apiKey: "AIzaSyB366vAvr7Q1dnMgNlrJqBUX_fICFYfdrk",
      authDomain: "web-white.firebaseapp.com",
      databaseURL: "https://web-white.firebaseio.com",
      projectId: "web-white",
      storageBucket: "web-white.appspot.com",
      messagingSenderId: "676784558482"
    };


    firebase.initializeApp(config);
    
    var storageRef=storage().ref(this.id);
    storageRef.getDownloadURL().then(url=> {
      
      this.url=url;
    }).catch(function(error) {
      // Handle any errors
    });

    this.getAdmin.getAdmin(this.newUser).
      subscribe((data:user)=>{
        this.user=data;
        
      });
  }


  onFileSelected(event){
   
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
    var storageRef=storage().ref(this.id);
    var metadata={'contentType':this.selectedFile.contentType}
    console.log(storageRef);
    var task:firebase.storage.UploadTask=storageRef.put(this.selectedFile,metadata);
   
    
    task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      
      storageRef.child(this.id).getDownloadURL().then(url=> {
        
        this.url=url;
      }).catch(function(error) {
        // Handle any errors
      });

      task.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.url = downloadURL;
        console.log('URL:' + this.url);
      });
    });

  }


}
