import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface Company {
  value: string;
  viewValue: string;
}

export interface CompanyGroup {
  disabled?: boolean;
  name: string;
  company: Company[];
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  companyControl = new FormControl();
  companyGroups: CompanyGroup[] = [
    {
      name: 'Shops',
      company: [
        {value: 'allegro-0', viewValue: 'Allegro'}
      ]
    },
    {
      name: 'Deliverers',
      company: [
        {value: 'fedex-1', viewValue: 'Fedex'},
        {value: 'pocztaPolska-2', viewValue: 'Poczta Polska'},
        {value: 'inpost-3', viewValue: 'InPost'}
      ]
    }
  ];

  openSnackBar() {
    if(true)
    {
      this._snackBar.open("Done!", "Close", { //change to "if tracking number is correct"
        duration: 2000,
      });
    }
  }
}
