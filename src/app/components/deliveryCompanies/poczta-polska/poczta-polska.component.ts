import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-poczta-polska',
  templateUrl: './poczta-polska.component.html',
  styleUrls: ['./poczta-polska.component.css']
})
export class PocztaPolskaComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private configService: ConfigService) { }

  ngOnInit() {
  }

  openSnackBar(code: String) {
    this.configService.getPocztaPolska(code).subscribe((data)=>{
      console.log(data)
    });
    if(true)
    {
      this._snackBar.open("Done!", "Close", { //change to "if tracking number is correct"
        duration: 2000,
      });
    }
  }
}
