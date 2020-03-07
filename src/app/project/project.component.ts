import { Component, OnInit } from '@angular/core';
import {House} from './../../models/house';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  houses:House[]=[];

  constructor() {
   var h1 = new House();
    h1.title = 'h1';
    h1.path = 'https://www.w3schools.com/w3images/house2.jpg';

    var h2 = new House();
    h2.title = 'h2';
    h2.path = 'https://www.w3schools.com/w3images/house2.jpg';


    var h3 = new House();
    h3.title = 'h3';
    h3.path = 'https://www.w3schools.com/w3images/house2.jpg';


    var h4 = new House();
    h4.title = 'h4';
    h4.path = 'https://www.w3schools.com/w3images/house2.jpg';


    var h5 = new House();
    h5.title = 'h5';
    h5.path = 'https://www.w3schools.com/w3images/house2.jpg';

    this.houses.push(h1);
    this.houses.push(h2);
    this.houses.push(h3);
    this.houses.push(h4);
    this.houses.push(h5);

   }

  ngOnInit(): void {
  }

}
