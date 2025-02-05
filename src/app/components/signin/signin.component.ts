import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loading=false;
  error=false;
  formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get username() {return this.formGroup.get('username');}
  get password() { return this.formGroup.get('password'); }

  onSubmit(){
    this.loading=true;

    this.formGroup.patchValue({username: this.username.value.toString().toLowerCase()});

    this.authService.authenticate(this.formGroup.value).subscribe(
      data=>{
        this.router.navigate(['/history']);
      },
      error=>{
        this.error=true;
        this.loading=false;
      }
    );
  }
}
