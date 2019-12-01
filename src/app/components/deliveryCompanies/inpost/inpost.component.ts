import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageService } from '../../_services/package.service';
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { InPost } from '../../_models/InPostModels/InPost';
import { InPostDetails } from '../../_models/InPostModels/InPostDetails';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-inpost',
  templateUrl: './inpost.component.html',
  styleUrls: ['./inpost.component.css']
})
export class InpostComponent implements OnInit {

  data: InPost;
  DATA: InPostDetails[];
  dataSource;
  isAnyPackage: Boolean = false;
  public textAreaContent;

  formGroup: FormGroup;

  displayedColumns: string[] = ['datetime', 'origin_status', 'status'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    this.isAnyPackage = false;
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
      this.packageService.getSingleInPost(this.packageCode.value.toString()).pipe(first()).subscribe(
      data => {
        this.data = data;
        this.DATA = this.data.tracking_details;
        this.dataSource = new MatTableDataSource<InPostDetails>(this.DATA);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        if(this.data != null)
          this.isAnyPackage = true;
      },
      error=>{
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
