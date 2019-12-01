import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { DHL } from '../../_models/DHLModels/DHL';
import { DHLEvent } from '../../_models/DHLModels/DHLEvent';

@Component({
  selector: 'app-dhl',
  templateUrl: './dhl.component.html',
  styleUrls: ['./dhl.component.css']
})
export class DhlComponent implements OnInit {
  data: DHL;
  isAnyPackage: Boolean = false;

  formGroup: FormGroup;
  DATA: DHLEvent[];
  dataSource;

  displayedColumns: string[] = ['timestamp', 'terminal', 'description'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
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
    this.packageService.getSingleDHL(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        if(data != null)
        {
          this.data = data;
          this.DATA = this.data.events;
          this.dataSource = new MatTableDataSource<DHLEvent>(this.DATA);
          setTimeout(() => this.dataSource.paginator = this.paginator);
          this.isAnyPackage = true;
          this.openSnackBar();
        }
        else {
          this.isAnyPackage = false;
          this._snackBar.open("Wrong package number!", "Close", { 
            duration: 2000,
          });
        }
      },
      error => {
        this.isAnyPackage = false;
        this._snackBar.open("Wrong package number!", "Close", { 
          duration: 2000,
        });
      }
    )
  }

  openSnackBar() {
    this._snackBar.open("Done!", "Close", { 
      duration: 2000,
    });
  }


}
