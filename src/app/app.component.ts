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


public start(): void {
  this.isStarted = true;
  setInterval( () => {
    this.time++;
  }, 1)
}

public pause():void {
  this.isPaused = true;
}

public  stop(): void {
  this.isStarted = false;
}

}
