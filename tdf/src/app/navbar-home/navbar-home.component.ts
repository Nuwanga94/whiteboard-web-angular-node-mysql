import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  navbarOpen = false;
  toggleNavbar(){
  this.navbarOpen = !this.navbarOpen;
  }

}
