import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  displayTable = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEye(){
    this.displayTable = !this.displayTable;
    if(!this.displayTable){
        document.querySelector('.table')?.setAttribute('class','table show');
      }else{
        document.querySelector('.table')?.setAttribute('class','table hide');
    }
  }

}
