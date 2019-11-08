import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-inpost',
  templateUrl: './inpost.component.html',
  styleUrls: ['./inpost.component.css']
})
export class InpostComponent implements OnInit {
  data: any;
  objects = [];

  constructor(private _snackBar: MatSnackBar, private configService: ConfigService) { }

  ngOnInit() {
  }

  openSnackBar(code: String) {
    this.objects.splice(0,1);
    this.configService.getInPost(code).subscribe((object: Response)=>{
      this.objects.push(object);
      console.log(this.objects);
    });
    if(true)
    {
      this._snackBar.open("Done!", "Close", { //change to "if tracking number is correct"
        duration: 2000,
      });
    }
  }
}
