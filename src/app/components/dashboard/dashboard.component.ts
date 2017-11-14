import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotionSensor } from '../../models/MotionSensor';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private motionSensor:any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://home-hub-59831.herokuapp.com/api/sensor/MotionSensor').subscribe(data => {
      // Read the result field from the JSON response.
      this.motionSensor = new MotionSensor(data);

    });
  }

}
