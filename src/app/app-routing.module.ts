import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';


const routes: Routes = [
  { 
    path: 'delivery', component: DeliveryComponent, pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'log-in', component: LogInComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
