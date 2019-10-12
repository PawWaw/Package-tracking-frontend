import { Component, OnInit } from '@angular/core';

export interface Method {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  methods: Method[] = [
    {value: 'GET', viewValue: 'Get'},
    {value: 'POST', viewValue: 'Post'},
    {value: 'PUT', viewValue: 'Put'},
    {value: 'DELETE', viewValue: 'Delete'}
  ];

}
