import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmploymentRoutingModule
  ]
})
export class EmploymentModule { }
