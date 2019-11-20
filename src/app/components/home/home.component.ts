import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
  ){}

ngOnInit(){
    console.log(localStorage.getItem('current_user'));
    if (localStorage.getItem('current_user') == null) {
      this.router.navigate(['/signin']);
      this._snackBar.open("Log in to see your history!", "Close", {
      duration: 2000,
    });
  }
}
}
