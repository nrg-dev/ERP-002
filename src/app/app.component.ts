import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "nrg-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  routeData: any;
  showSideBar: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {}

  ngOnInit() {
    // Get Route data
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.routeData = data;
      });

    this.store
      .select("showSideBar")
      .subscribe((state) => (this.showSideBar = state));
  }
}
