import { Component, OnInit } from '@angular/core';
import { randomNumbers, sortedArray } from 'src/app/constants/constants';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.scss'],
})
export class MergeSortComponent implements OnInit {
  randomNumbers:any = randomNumbers;
  loading = false;
  timer: any = '';
  startTime:any = '';
  copy:any = null;
  constructor() {
    console.log('randomArray = ',randomNumbers)
    this.copy = [...randomNumbers]
  }

  ngOnInit(): void {}

  mergeSort(arr = this.copy) {
    this.randomNumbers = null;
    this.startTime = performance.now();
    this.loading = true;

    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left: any = this.mergeSort(arr.slice(0, mid));
    const right: any = this.mergeSort(arr.slice(mid));

    return this.merge(left, right);
  }

  merge(sortedArr1: any, sortedArr2: any) {
    let l = 0,
      r = 0,
      leftLen = sortedArr1.length,
      rightLen = sortedArr2.length;
    const sortedArr = [];

    while (l < leftLen && r < rightLen) {
      if (sortedArr1[l] < sortedArr2[r]) {
        sortedArr.push(sortedArr1[l]);
        l++;
      } else {
        sortedArr.push(sortedArr2[r]);
        r++;
      }
    }

    while (l < leftLen) {
      sortedArr.push(sortedArr1[l]);
      l++;
    }

    while (r < rightLen) {
      sortedArr.push(sortedArr2[r]);
      r++;
    }

    if(leftLen + rightLen ==  this.copy.length){
      this.loading = false;
      const endTime = performance.now();
      console.log(endTime - this.startTime);
      this.timer = (endTime - this.startTime) + " ms";
      console.log(sortedArray);
      // this.randomNumbers = sortedArray
    }    

    return sortedArr;
  }
}
