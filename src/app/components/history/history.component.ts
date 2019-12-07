import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { AuthService } from '../_services/auth.service';
import { PackageService } from '../_services/package.service';
import { first } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { MatTableDataSource } from '@angular/material';
import { FedexDates } from '../_models/FedexModels/FedexDates';


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
  dataFedex: FedexDates[]
  isDHL: Boolean;
  isFedex: Boolean;
  isUPS: Boolean;
  isInPost: Boolean;
  isPocztaPolska: Boolean;
  isAnyPackage: Boolean;
  dataInPost: any;
  data: any;
  dataSource: any;
  paginator: any;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthService,
    private packageService: PackageService) { 
  }

  formGroup: FormGroup;

  displayedColumns: string[] = ['code', 'datetime', 'place', 'description'];
  displayedColumnsInPost: string[] = ["code", 'datetime', 'status'];
  displayedColumnsDHL: string[] = ['code', 'timestamp', 'terminal', 'description'];
  displayedColumnsFedex: string[] = ['type', 'date'];
  displayedColumnsUPS: string[] = ['packageCode', 'date', 'time', 'city', 'description'];

  ngOnInit() {
    if (localStorage.getItem('current_user') == null) {
      this.router.navigate(['/signin']);
      this._snackBar.open("Log in to see your history!", "Close", {
      duration: 2000,
    });
    }
    this.formGroup = this.formBuilder.group({
      packageCode: ['', [Validators.required]]
    });
  }

  get packageCode() {return this.formGroup.get('packageCode');}

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
          this.data = data;
          this.dataSource = new MatTableDataSource<any>(this.data);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isDHL = true;
          this.isAnyPackage = true;
          this.isInPost = false;
          this.isPocztaPolska = false;
          this.isUPS = false;
          this.isFedex = false;
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "fedex-1")
    {
      this.packageService.getFedex().pipe(first()).subscribe(
        data => {
          this.dataFedex = data;
          console.log(this.dataFedex);
          this.dataSource = new MatTableDataSource<FedexDates>(this.dataFedex);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isFedex = true;
          this.isAnyPackage = true;
          this.isInPost = false;
          this.isPocztaPolska = false;
          this.isUPS = false;
          this.isDHL = false;
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "inpost-3")
    {
      this.packageService.getInPost().pipe(first()).subscribe(
        data => {
          this.data = data;
          this.dataSource = new MatTableDataSource<any>(this.data);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isAnyPackage = true;
          this.isInPost = true;
          this.isPocztaPolska = false;
          this.isDHL = false;
          this.isUPS = false;
          this.isFedex = false;
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "pocztaPolska-4")
    {
      this.packageService.getPocztaPolska().pipe(first()).subscribe(
        data => {
          this.data = data;
          this.dataSource = new MatTableDataSource<any>(this.data);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isPocztaPolska = true;
          this.isAnyPackage = true;
          this.isDHL = false;
          this.isUPS = false;
          this.isFedex = false;
          this.isInPost = false;
        }
      )
      this.openSnackBar();
    }
    else if(this.companyControl.value == "ups-5")
    {
      this.packageService.getUPS().pipe(first()).subscribe(
        data => {
          this.data = data;
          console.log(this.data);
          this.dataSource = new MatTableDataSource<any>(this.data);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isUPS = true;
          this.isAnyPackage = true;
          this.isDHL = false;
          this.isPocztaPolska = false;
          this.isFedex = false;
          this.isInPost = false;
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
