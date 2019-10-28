import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './components/about/about.component'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { AllegroComponent } from './components/shops/allegro/allegro.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DhlComponent } from './components/deliveryCompanies/dhl/dhl.component';
import { InpostComponent } from './components/deliveryCompanies/inpost/inpost.component';
import { PocztaPolskaComponent } from './components/deliveryCompanies/poczta-polska/poczta-polska.component';
import { FedexComponent } from './components/deliveryCompanies/fedex/fedex.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    HeaderComponent,
    HomeComponent,
    LogInComponent,
    AboutComponent,
    AllegroComponent,
    ConfigComponent,
    FooterComponent,
    DhlComponent,
    InpostComponent,
    PocztaPolskaComponent,
    FedexComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
