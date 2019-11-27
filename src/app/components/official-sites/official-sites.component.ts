import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-sites',
  templateUrl: './official-sites.component.html',
  styleUrls: ['./official-sites.component.css']
})
export class OfficialSitesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToDPD(){
    window.open("https://www.dpd.com.pl/Zlokalizuj-paczke");
  }

  goToGLS(){
    window.open("https://gls-group.eu/PL/pl/sledzenie-paczek", "_blank");
  }

  goToRUCH(){
    window.open("https://www.paczkawruchu.pl", "_blank");
  }
}
