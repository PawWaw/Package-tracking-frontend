import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { FormControl } from '@angular/forms';

export interface Method {
  value: string;
  viewValue: string;
}

export class Delivery {
  id: string;
  code: string;
  userId: string;
  quantity: number;
  shipStartDate: Date;
  shipEndDate: Date;
  processingStage: string;
  activeStatus: string;
  history: object;
  complete: boolean;
}

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  delivery;
  selectedMethod: Delivery;
  data;
  jsonData: any = [];

  constructor(private configService: ConfigService) { }

  ngOnInit() {

  }

  methods: Method[] = [
    {value: 'GET', viewValue: 'Get'},
    {value: 'POST', viewValue: 'Post'},
    {value: 'PUT', viewValue: 'Put'},
    {value: 'DELETE', viewValue: 'Delete'}
  ];

  getDelivery(code: String) {
    if(this.selectedMethod.toString() == "GET") {
      this.configService.getNews(code).subscribe((data)=>{
        this.jsonData.push(data);
      });
    }
    else if(this.selectedMethod.toString() == "POST") {

    }
    else if(this.selectedMethod.toString() == "PUT") {

    }
    else {

    }
  }
}
