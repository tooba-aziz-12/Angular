import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PulldataService } from './pulldata.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'test-app';

  public data = null;

  constructor(private pullDataService: PulldataService) { }

  ngOnInit() {
    this.callGetData();
  }

  public callGetData() {
    const secondsCounter = interval(500);
    secondsCounter.subscribe(n =>
    this.pullDataService.getData().subscribe(o => {
      this.data = o;
    })
    );
  }

}
