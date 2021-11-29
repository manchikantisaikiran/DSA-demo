import { Component, OnInit } from '@angular/core';
import { sortedArray } from 'src/app/constants/constants';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss'],
})
export class BinarySearchComponent implements OnInit {
  
  loader = false;
  Timer: any = '';
  elementFound:any = null;

  constructor() {}

  ngOnInit(): void {}

  binarySearch(val:any,sortedArr = sortedArray) {
    let left = 0;
    let right = sortedArr.length - 1;
    this.elementFound = null;
    const startTime = performance.now();
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (sortedArr[mid] == val) {
        this.loader = false;
        this.elementFound = true;
        // return mid;
        break;
      }

      if (val < sortedArr[mid]) {
        right = mid - 1;
      }

      if (val > sortedArr[mid]) {
        left = mid + 1;
      }
    }
    if(!this.elementFound){
      this.elementFound = false;
    }
    const endTime = performance.now();
    this.Timer =  (endTime - startTime) + " ms";
    console.log(this.Timer)
    return -1;
  }
}
