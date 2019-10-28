import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutComponent } from './components/about/about.component';
import { AllegroComponent } from './components/shops/allegro/allegro.component';
import { DhlComponent } from './components/deliveryCompanies/dhl/dhl.component';
import { PocztaPolskaComponent } from './components/deliveryCompanies/poczta-polska/poczta-polska.component';
import { InpostComponent } from './components/deliveryCompanies/inpost/inpost.component';
import { FedexComponent } from './components/deliveryCompanies/fedex/fedex.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  { 
    path: 'delivery', component: DeliveryComponent, pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'log-in', component: LogInComponent, pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent, pathMatch: 'full'
  },
  {
    path: 'allegro', component: AllegroComponent, pathMatch: 'full'
  },
  {
    path: 'dhl', component: DhlComponent, pathMatch: 'full'
  },
  {
    path: 'pocztaPolska', component: PocztaPolskaComponent, pathMatch: 'full'
  },
  {
    path: 'inPost', component: InpostComponent, pathMatch: 'full'
  },
  {
    path: 'fedex', component: FedexComponent, pathMatch: 'full'
  },
  {
    path: 'history', component: HistoryComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
