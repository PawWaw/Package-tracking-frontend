import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

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
  delivery;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  methods: Method[] = [
    {value: 'GET', viewValue: 'Get'},
    {value: 'POST', viewValue: 'Post'},
    {value: 'PUT', viewValue: 'Put'},
    {value: 'DELETE', viewValue: 'Delete'}
  ];

  getDelivery() {
    this.configService.getNews().subscribe((data)=>{
      console.log(data);
      this.delivery = data['delivery'];
    });
  }
}
