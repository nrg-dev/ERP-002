import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { API_ENDPOINTS } from "src/app/config/api-endpoints";

@Injectable({
  providedIn: "root",
})
export class FetcherService {
  constructor(private http: HttpClient) {}

  urlBuilder(key: string) {
    return `${environment.apiUrl}${API_ENDPOINTS[key]}`;
  }

  get(url: string) {
    return this.http.get(this.urlBuilder(url));
  }
}
