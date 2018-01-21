import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotionSensor } from '../../models/MotionSensor';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public motionSensor:any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://hub.homehubserver.com:8080/api/sensor/MotionSensor').subscribe(data => {
      // Read the result field from the JSON response.
      this.motionSensor = new MotionSensor(data);

    });
  }

}
