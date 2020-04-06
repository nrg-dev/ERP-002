import { Component, OnInit } from "@angular/core";
import { SidenavItems, MenuItem } from "./sidebar.config";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = SidenavItems;
  }
}
