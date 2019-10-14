import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutComponent } from './components/about/about.component';
import { AllegroComponent } from './components/allegro/allegro.component';
import { ConfigComponent } from './config/config.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
