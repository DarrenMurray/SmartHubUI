import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  public steps;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://hub.homehubserver.com:8080/api/fitness/steps').subscribe(data => {
      // Read the result field from the JSON response.
      this.steps = data;

    });
  }

}

