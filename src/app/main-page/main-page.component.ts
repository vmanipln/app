import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  phrase: string ="Welcome";
  name: string ='Veeramani';
  location: string ="Chennai";
  enableLogout  = false;
  role = "Developer";
  firstName = "";

  getLocation(){
    return this.location;
  }

  constructor() { 
    setTimeout(() => {
      return this.enableLogout = true;
    },2000)
  }
  roleChanged(){
    return this.role = "Technical Lead";
  }
  getFirstName(event:Event){
    this.firstName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
