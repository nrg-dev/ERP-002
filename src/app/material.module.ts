import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatExpansionModule, MatTableModule],
})
export class MaterialModule {}
