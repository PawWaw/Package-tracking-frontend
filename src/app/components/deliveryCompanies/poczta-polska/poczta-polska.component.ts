import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { PocztaPolska } from '../../_models/PocztaPolskaModels/PocztaPolska';
import { PocztaPolskaDetails } from '../../_models/PocztaPolskaModels/PocztaPolskaDetails';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-poczta-polska',
  templateUrl: './poczta-polska.component.html',
  styleUrls: ['./poczta-polska.component.css']
})
export class PocztaPolskaComponent implements OnInit {
  data: PocztaPolska;
  DATA: PocztaPolskaDetails[];
  dataSource: any;
  isAnyPackage: Boolean = false;

  formGroup: FormGroup;

  displayedColumns: string[] = ['datetime', 'place', 'description'];

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
    this.packageService.getSinglePocztaPolska(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.data = data;
        this.DATA = this.data.events;
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.dataSource = new MatTableDataSource<PocztaPolskaDetails>(this.DATA);
        this.isAnyPackage = true;
      },
      error => {
        this.isAnyPackage = false;
        this.openSnackBar("Wrong package number!");
      }
    )
    this.openSnackBar("Done");
  }

  openSnackBar(text: string) {
    this._snackBar.open(text, "Close", { 
      duration: 2000,
    });
  }
}
