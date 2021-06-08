import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  constructor() {
    this.value1 = 0;
    this.value2 = 0;
    this.value3 = 0;
    this.value4 = 0;
    this.value5 = 0;
  }

  ngOnInit() {
  }

}
