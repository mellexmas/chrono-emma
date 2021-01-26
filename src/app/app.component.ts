import { Component } from '@angular/core';
import { TimeItem } from './time-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chrono-emma';

  public isStarted: boolean = false;
  public isPaused: boolean = false;
  public time = 0;
  private idInterval: number | null = null;

  public result: Array<TimeItem> = [];
  public note: Array<string> = [];

  public pause(): void {
    this.isPaused = true;
    this.stopTimer();
    //this.result.push(this.time);
    this.keep();
    console.table(this.result)
  }
  public start(): void {
    this.isStarted = true;
    this.isPaused = false;
    this.startTimer();
  }
  public stop(): void {
    this.isStarted = false;
    this.stopTimer();
    this.time = 0;
    this.result = [];
  }
  public continue(): void {
    this.isPaused = false;
    this.startTimer();
  }
  public keep(): void {
    this.result.push({
      time : this.time,
      note : "",
    });
  }
  private startTimer(): void {
    this.stopTimer();
    this.idInterval = setInterval(() => {
      this.time++;
      //console.log(this.time)
    }, 1);
  }
  private stopTimer(): void {
    if (this.idInterval !== null) {
      clearInterval(this.idInterval);
      
    }
  }

  public removeItem(index: number): void {
  // if (index !== -1) {
    if (index >= 0 && index < this.result.length){  
      this.result.splice(index, 1);
    }
  }

  public get tableNotEmpty(): boolean {
      if (this.result.length > 0) {
        return true
      }
    return false;
  }

 /* public addText($event: KeybordEvent): void {
    if ($event.code === 'Enter') {
      const $input: EventTarget | null = $event.target;
    
    }
  }*/


}
