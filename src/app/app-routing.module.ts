import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DeliveryroutecreationComponent } from './components/deliveryroutecreation/deliveryroutecreation.component';
import { CreatedeliverymanComponent } from './components/createdeliveryman/createdeliveryman.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'delivery/new', component: DeliveryroutecreationComponent },
      { path: 'deliveryman/new', component: CreatedeliverymanComponent },
      {path: 'deliveryroutes',loadChildren:()=> import('./components/deliveryroutes/deliveryroutes.module').then(m =>m.DeliveryroutesModule)}
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
