import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UPS } from '../../_models/UPSModels/UPS';
import { Fedex } from '../../_models/FedexModels/Fedex';
import { CompletedTrackDetails } from '../../_models/FedexModels/CompletedTrackDetails';
import { datesOrTimes } from '../../_models/FedexModels/datesOrTimes';
import { MatPaginator, MatTableDataSource, MatTab } from '@angular/material';
import { PocztaPolskaDetails } from '../../_models/PocztaPolskaModels/PocztaPolskaDetails';
import { PocztaPolska } from '../../_models/PocztaPolskaModels/PocztaPolska';
import { InPost } from '../../_models/InPostModels/InPost';
import { InPostDetails } from '../../_models/InPostModels/InPostDetails';
import { DHLEvent } from '../../_models/DHLModels/DHLEvent';
import { _Package } from '../../_models/UPSModels/_Package';
import { Activity } from '../../_models/UPSModels/Activity';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {
  data: any;
  DATA: any;
  dataSource;
  isAnyPackage: Boolean;

  isInPost: Boolean;
  isPocztaPolska: Boolean;
  isDHL: Boolean;
  isUPS: Boolean;
  isFedex: Boolean;

  dataInPost: InPostDetails[];
  dataPocztaPolska: PocztaPolskaDetails[];
  dataDHL: DHLEvent[];
  dataFedex: datesOrTimes[];
  dataUPS: Activity[];


  formGroup: FormGroup;

  displayedColumns: string[] = ['datetime', 'place', 'description'];
  displayedColumnsInPost: string[] = ['datetime', 'origin_status', 'status'];
  displayedColumnsDHL: string[] = ['timestamp', 'terminal', 'description'];
  displayedColumnsFedex: string[] = ['type', 'date'];
  displayedColumnsUPS: string[] = ['date'];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('current_user') == null) {
      this.router.navigate(['/signin']);
      this._snackBar.open("Sign in to do this operation!", "Close", {
      duration: 2000,
    });
    }
    this.formGroup = this.formBuilder.group({
      packageCode: ['', [Validators.required]]
    });
  }

  get packageCode() {return this.formGroup.get('packageCode');}

  findPackage() {
    this.packageService.getSingleUnknown(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.data = data;
        if(this.data.sendPostOffice != null)
        {
          this.dataPocztaPolska = this.data.events;
          this.dataSource = new MatTableDataSource<any>(this.dataPocztaPolska);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isPocztaPolska = true;
          this.isInPost = false;
          this.isDHL = false;
          this.isFedex = false;
          this.isUPS = false;
        }
        else if(this.data.updated_at != null)
        {
          this.dataInPost = this.data.tracking_details;
          this.dataSource = new MatTableDataSource<any>(this.dataInPost);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isInPost = true;
          this.isPocztaPolska = false;
          this.isDHL = false;
          this.isUPS = false;
          this.isFedex = false;
        }
        else if(this.data.received_by != null)
        {
          this.dataDHL = this.data.events;
          this.dataSource = new MatTableDataSource<any>(this.dataDHL);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isDHL = true;
          this.isInPost = false;
          this.isPocztaPolska = false;
          this.isFedex = false;
          this.isUPS = false;
        }
        else if(this.data.completedTrackDetails != null)
        {
          this.dataFedex = this.data.completedTrackDetails[0].datesOrTimes;
          this.dataSource = new MatTableDataSource<any>(this.dataFedex);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isFedex = true;
          this.isDHL = false;
          this.isInPost = false;
          this.isPocztaPolska = false;
          this.isUPS = false;
        }
        else if(this.data.trackResponse != null)
        {
          this.dataUPS = this.data.trackResponse.shipment._package.activity;
          this.dataSource = new MatTableDataSource<any>(this.dataUPS);
          console.log(this.data);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isUPS = true;
          this.isFedex = false;
          this.isDHL = false;
          this.isInPost = false;
          this.isPocztaPolska = false;
        }
        this.isAnyPackage = true;
      },
      error => {
        this.isAnyPackage = false;
        this.isPocztaPolska = false;
        this.isInPost = false;
        this.isDHL = false;
        this.isFedex = false;
        this.isUPS = false;
      }
    )
  }

  isUpsPackage(tracking: UPS) {
    console.log(tracking);
  }

  isFedexPackage(tracking: Fedex) {
    console.log(tracking);
  }

  openSnackBar(statusCode: string) {
    if(statusCode == "ok")
    {
      this._snackBar.open("Done!", "Close", { 
        duration: 2000,
      });
    }
    else
    {
      this._snackBar.open(statusCode, "Close", { 
        duration: 2000,
      });
    }

  }
}
