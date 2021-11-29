import { Component, OnInit } from '@angular/core';
import { wordList, randomNumbers,sortedArray } from 'src/app/constants/constants';

@Component({
  selector: 'app-linear-search',
  templateUrl: './linear-search.component.html',
  styleUrls: ['./linear-search.component.scss'],
})
export class LinearSearchComponent implements OnInit {
  loader = false;
  Timer: any = '';
  elementFound:any = null;

  constructor() {
    // console.log(wordList)
  }

  startTime: any;
  elapsedTime = 0;
  timerInterval: any;

  timeToString(time: any) {
    console.log(time);
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMS}:${time.getMilliseconds()}`;
  }

  start() {
    console.log('called start');
    this.startTime = Date.now() - this.elapsedTime;
    this.timerInterval = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.Timer = this.timeToString(this.elapsedTime);
      console.log(this.Timer);
    }, 1);
    // showButton('PAUSE');
  }

  pause() {
    console.log('called pause');
    clearInterval(this.timerInterval);
    // showButton('PLAY');
  }

  reset() {
    clearInterval(this.timerInterval);
    this.Timer = '00:00:00:000';
    this.elapsedTime = 0;
    // showButton('PLAY');
  }

  linearSearch(value: any) {
    this.elementFound = null;
    const startTime = performance.now();
    for (let i = 0; i < sortedArray.length; i++) {
      if (value == sortedArray[i]) {
        this.loader = false;
        this.elementFound = true;
      }
    }

    if(!this.elementFound){
      this.elementFound = false;
    }
    const endTime = performance.now();
    this.Timer =  (endTime - startTime) + " ms";
  }

  ngOnInit(): void {}
}
