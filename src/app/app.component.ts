import { Component } from '@angular/core';

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

private idInterval : number|null = null;


public start(): void {
  this.isStarted = true;

  this.startTimer();
  
}
public  stop(): void {
  this.isStarted = false;
  this.stopTimer();
  this.time = 0; 
}

public pause():void {
  this.isPaused = true;
 this.stopTimer();
 
}

public continue(): void {
  this.isPaused = false;
  this.startTimer();
}

private startTimer(): void {
  this.idInterval = setInterval( () => {
    this.time++;
    //console.log(this.time)
  }, 1);
}

private stopTimer(): void {
  if(this.idInterval !== null){
    clearInterval(this.idInterval);
  }
}




}
