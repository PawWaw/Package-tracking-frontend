import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }
}
