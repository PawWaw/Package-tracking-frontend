import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { AuthService } from '../_services/auth.service';
import { PackageService } from '../_services/package.service';
import { first } from "rxjs/operators";
import { Observable, throwError } from "rxjs";


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

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthService,
    private packageService: PackageService) { 
  }

  ngOnInit() {
    if (localStorage.getItem('current_user') == null) {
      this.router.navigate(['/signin']);
      this._snackBar.open("Log in to see your history!", "Close", {
      duration: 2000,
    });
    }
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
        {value: 'dhl-0', viewValue: 'DHL'},
        {value: 'fedex-1', viewValue: 'Fedex'},
        {value: 'gls-2', viewValue: 'GLS'},        
        {value: 'inpost-3', viewValue: 'InPost'},
        {value: 'pocztaPolska-4', viewValue: 'Poczta Polska'},
        {value: 'ups-5', viewValue: 'UPS'}
      ]
    }
  ];

  findPackages() {
    if(this.companyControl.value == "allegro-0")
    {

      this.openSnackBar();
    }
    else if(this.companyControl.value == "dhl-0")
    {
      this.packageService.getDHL().pipe(first()).subscribe(
        data => {
          console.log(data);
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "fedex-1")
    {
      this.packageService.getFedex().pipe(first()).subscribe(
        data => {
          console.log(data);
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "gls-2")
    {
      this.packageService.getGLS().pipe(first()).subscribe(
        data => {
          console.log(data);
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "inpost-3")
    {
      this.packageService.getInPost().pipe(first()).subscribe(
        data => {
          console.log(data);
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "pocztaPolska-4")
    {
      this.packageService.getPocztaPolska().pipe(first()).subscribe(
        data => {
          console.log(data);
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "ups-5")
    {
      this.packageService.getUPS().pipe(first()).subscribe(
        data => {
          console.log(data);
        }
      )
      this.openSnackBar();
    }
    else
    {
      this._snackBar.open("Select package deliverer!", "Close", {
      duration: 2000,
    });
    }
  }

  openSnackBar() {
    this._snackBar.open("Done!", "Close", { 
      duration: 2000,
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
