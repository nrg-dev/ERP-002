import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, UserAvatarComponent],
  exports: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
