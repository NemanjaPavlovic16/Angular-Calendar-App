import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { OMeniComponent } from '../o-meni/o-meni.component';
import { KalendarComponent } from '../kalendar/kalendar.component';


const appRoutes: Routes = [
{ path: 'o-meni', component: OMeniComponent },
{ path: 'kalendar', component: KalendarComponent }

];

@NgModule({
  declarations: [],
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
