import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UPS } from '../../_models/UPS';
import { Fedex } from '../../_models/Fedex';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {
  data: any;
  isAnyPackage: Boolean;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private packageService: PackageService
  ) { }

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

  findPackage() {
    this.packageService.getSingleUPS(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.isUpsPackage(data);
        return;
      }
    )
    this.packageService.getSingleFedex(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.isFedexPackage(data);
        return;
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
