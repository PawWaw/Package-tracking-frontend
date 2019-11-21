import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { AllegroComponent } from './components/shops/allegro/allegro.component';
import { DhlComponent } from './components/deliveryCompanies/dhl/dhl.component';
import { PocztaPolskaComponent } from './components/deliveryCompanies/poczta-polska/poczta-polska.component';
import { InpostComponent } from './components/deliveryCompanies/inpost/inpost.component';
import { FedexComponent } from './components/deliveryCompanies/fedex/fedex.component';
import { HistoryComponent } from './components/history/history.component';
import { UpsComponent } from './components/deliveryCompanies/ups/ups.component';
import { UnknownComponent } from './components/deliveryCompanies/unknown/unknown.component';
import { SignUpComponent } from './components/signup/signup.component';


const routes: Routes = [
  { 
    path: 'delivery', component: DeliveryComponent, pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'signin', component: SignInComponent, pathMatch: 'full'
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
    path: 'ups', component: UpsComponent, pathMatch: 'full'
  },
  {
    path: 'history', component: HistoryComponent, pathMatch: 'full'
  },
  {
    path: 'unknown', component: UnknownComponent, pathMatch: 'full'
  },
  {
    path: 'signup', component: SignUpComponent, pathMatch: 'full'
  },
  { 
    path: '**', redirectTo: 'home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
