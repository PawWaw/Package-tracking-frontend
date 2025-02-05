import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UPS } from '../../_models/UPSModels/UPS';
import { Packages } from '../../_models/UPSModels/Packages';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Activity } from '../../_models/UPSModels/Activity';
import { Shipment } from '../../_models/UPSModels/Shipment';
import { StatusChanges } from '../../_models/UPSModels/StatusChanges';

@Component({
  selector: 'app-ups',
  templateUrl: './ups.component.html',
  styleUrls: ['./ups.component.css']
})
export class UpsComponent implements OnInit {
  DATA: StatusChanges[];
  dataSource: any;
  isAnyPackage: Boolean = false;

  formGroup: FormGroup;

  displayedColumns: string[] = ['date', 'time', 'city', 'description'];

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
    this.packageService.getSingleUPS(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.DATA = data;
        console.log(this.DATA[4].date);
        this.dataSource = new MatTableDataSource<StatusChanges>(this.DATA);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.isAnyPackage = true;
      },
      error => {
        this.isAnyPackage = false;
      }
    )
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Done!", "Close", { 
      duration: 2000,
    });
  }
}
