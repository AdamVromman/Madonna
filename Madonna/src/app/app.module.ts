import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BarComponent } from './bar/bar.component';
import { FeestzaalComponent } from './feestzaal/feestzaal.component';
import { FormulesComponent } from './formules/formules.component';
import { InfoComponent } from './info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

let ROUTES: Routes = [
  {component: HomeComponent, path: 'home'},
  {component: RestaurantComponent, path: 'restaurant'},
  {component: BarComponent, path: 'bar'},
  {component: FeestzaalComponent, path: 'feestzaal'},
  {component: FormulesComponent, path: 'formules'},
  {component: InfoComponent, path: 'info'},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', redirectTo: 'home',  pathMatch: 'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    BarComponent,
    FeestzaalComponent,
    FormulesComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
