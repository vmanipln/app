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

  getLocation(){
    return this.location;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
