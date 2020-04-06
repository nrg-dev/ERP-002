import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { RouterModule } from "@angular/router";

// ngRx
import { StoreModule } from "@ngrx/store";
import { SidebarReducer } from "./store/reducers/sidebar.reducer";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, UserAvatarComponent],
  exports: [HeaderComponent, SidebarComponent, MaterialModule],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    StoreModule.forRoot({ showSideBar: SidebarReducer }),
  ],
})
export class CoreModule {}
