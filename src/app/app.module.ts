import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractionComponent } from './interaction/interaction.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateComponent } from './create/create.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBinderComponent } from './event-binder/event-binder.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Example1Component } from './example1/example1.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankingComponent } from './banking/banking.component';
import { StoreComponent } from './store/store.component';
import { VehicleNewComponent } from './vehicle-new/vehicle-new.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InteractionComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CreateComponent,
    InterpolationComponent,
    EventBinderComponent,
    CreateAccountComponent,
    AccountSummaryComponent,
    Example1Component,
    RegistrationformComponent,
    VehicleComponent,
    BankingComponent,
    StoreComponent,
    VehicleNewComponent,
    FormDetailsComponent,
    OrderFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
