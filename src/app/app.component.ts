import { Component } from '@angular/core';
import { wordList,sortedArray } from './constants/constants'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DSA-demo';

  constructor(){
    console.log(sortedArray);
  }
}