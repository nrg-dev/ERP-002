import { Injectable } from "@angular/core";
import { FetcherService } from "src/app/shared-services/fetcher/fetcher.service";

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  constructor(private fetcher: FetcherService) {}

  getEmployees() {
    return this.fetcher.get("allEmployees");
  }
}
