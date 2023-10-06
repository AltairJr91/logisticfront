import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryroutesListComponent } from '../deliveryroutes-list/deliveryroutes-list.component';

const routes: Routes = [
  {path:'', component:DeliveryroutesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryroutesRoutingModule { }
