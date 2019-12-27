
import { CreateEmployeeComponent } from './Component/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './Component/employee-list/employee-list.component';
import {HomeComponent} from './Component/home/home.component';
import {EmployeeDetailsComponent} from './Component/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'hom', pathMatch: 'full' },
  { path: 'hom', component: HomeComponent},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'details', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
