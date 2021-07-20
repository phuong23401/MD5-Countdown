import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  timer : number;
  startTime : any;
  non : string = '';
  found: string = '';
  messages : boolean = true;

  @Output()
  finish = new EventEmitter<boolean>();
  
  constructor() {
    this.timer = 10;
   }

  ngOnInit(): void {
  }

  start() {
    this.startTime = setInterval(() => {
      if(this.timer > 0) {
      this.timer--;
      this.end();
      }
    }, 1000);
    this.messages = true;
  }

  stop() {
    clearInterval(this.startTime);
    this.messages = false;
  }

  reset() {
    this.stop();
    this.timer = 10;
    this.messages = false;
  }

  end() {
    if(this.timer == 0) {
      this.stop();
      this.finish.emit(true);
      this.messages =false;

    }
  }
}
