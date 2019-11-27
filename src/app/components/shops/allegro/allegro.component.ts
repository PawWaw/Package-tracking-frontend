import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfigService } from 'src/app/config/config.service';
import { Observable } from 'rxjs';
import { timeout } from 'q';
import { Router } from '@angular/router';

export interface Method {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-allegro',
  templateUrl: './allegro.component.html',
  styleUrls: ['./allegro.component.css']
})
export class AllegroComponent implements OnInit {
  data: boolean = false;
  selectedMethod: any;
  objects = [];

  methods: Method[] = [
    {value: 'me', viewValue: 'My account'},
  ];

  constructor(private _snackBar: MatSnackBar, private configService: ConfigService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('current_user') == null) {
      this.router.navigate(['/signin']);
      this._snackBar.open("Sign in to do this operation!", "Close", {
      duration: 2000,
    });
    }
    this.configService.allegroGetToken().subscribe((data)=>{
      console.log(data);
      if(data.toString() == "true")
        this.data = true;
      else
        this.data = false;
    });
  }

  openSnackBar() {
    if(true)
    {
      this._snackBar.open("Done!", "Close", { //change to "if tracking number is correct"
        duration: 2000,
      });
    }
  }

  goToAuth(url: string){
    window.open(url, "_blank");
    window.location.reload();
  }

  logOut(){
    this.configService.allegroEraseToken().subscribe((data)=>{
      console.log(data)
    });;
    window.location.reload();
  }

  show(){
    if(this.selectedMethod.toString() == "me") {
      this.configService.allegroGetMe().subscribe((data)=>{
        console.log(data);
        this.objects.push(data);
      })
    }
  }
}
