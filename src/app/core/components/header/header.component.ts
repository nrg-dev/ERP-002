import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToggleSidebar } from "./../../store/actions/sidebar.actions";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  toggleSideBar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
