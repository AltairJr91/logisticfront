import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DeliveryroutecreationComponent } from './components/deliveryroutecreation/deliveryroutecreation.component';
import { CreatedeliverymanComponent } from './components/createdeliveryman/createdeliveryman.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LayoutComponent } from './components/layout/layout.component';
import { DeliveryroutesListComponent } from './components/deliveryroutes-list/deliveryroutes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    DeliveryroutecreationComponent,
    CreatedeliverymanComponent,
    DeliveryroutesListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
