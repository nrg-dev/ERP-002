import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesComponent } from "./components/employees/employees.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeesComponent,
    data: {
      sample: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploymentRoutingModule {}
