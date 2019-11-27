import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Fedex } from '../../_models/FedexModels/Fedex';
import { FedexDetails } from '../../_models/FedexModels/FedexDetails';

@Component({
  selector: 'app-fedex',
  templateUrl: './fedex.component.html',
  styleUrls: ['./fedex.component.css']
})
export class FedexComponent implements OnInit {
  data: Fedex;
  details: FedexDetails;
  isAnyPackage: Boolean = false;

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
    this.packageService.getSingleFedex(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.data = data
        this.details = this.data.completedTrackDetails;
        console.log(this.data);
        console.log(this.details);
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
