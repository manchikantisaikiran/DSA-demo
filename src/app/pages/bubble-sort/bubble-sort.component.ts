import { Component, OnInit } from '@angular/core';
import { wordList,randomNumbers } from 'src/app/constants/constants';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss'],
})
export class BubbleSortComponent implements OnInit {
  
  randomNumbers = randomNumbers;
  loading = false;
  timer:any = "";

  constructor() {}


  ngOnInit(): void {}

  swap(array:any, i:any, j:any) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  bubbleSort() {
    const array = randomNumbers
    let noswaps;
    let count = 0;
    console.log('sorting started')
    const startTime = performance.now();
    this.loading = true;
    for (let i = 0; i < array.length; i++) {
      noswaps = true;
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // swap(array,j,j+1);
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; //ES2015
          noswaps = false;
        }
        count++;
      }
      if (noswaps) {
        break;
      }
    }
    this.loading = false;
    const endTime = performance.now();
    console.log(endTime - startTime);
    this.timer = (endTime - startTime) + " ms";
    console.log(count);
    console.log(array);
    // this.randomNumbers = array;
    return array;
  }
}
