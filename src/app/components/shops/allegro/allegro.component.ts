import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-allegro',
  templateUrl: './allegro.component.html',
  styleUrls: ['./allegro.component.css']
})
export class AllegroComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    if(true)
    {
      this._snackBar.open("Done!", "Close", { //change to "if tracking number is correct"
        duration: 2000,
      });
    }
  }
}
