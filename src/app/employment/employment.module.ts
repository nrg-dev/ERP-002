import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmploymentRoutingModule } from "./employment-routing.module";
import { EmployeesComponent } from "./components/employees/employees.component";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmploymentRoutingModule, MaterialModule],
})
export class EmploymentModule {}
