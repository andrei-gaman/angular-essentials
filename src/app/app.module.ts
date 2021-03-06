import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './assignments/dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponent } from './assignments/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
