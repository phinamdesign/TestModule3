import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './Component/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './Component/employee-details/employee-details.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
