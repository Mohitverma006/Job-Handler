import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  dropdownStatus:boolean=true;
  showDropdown()
  {
    this.dropdownStatus=!this.dropdownStatus;
  }

  ngOnInit() {
  }

}
