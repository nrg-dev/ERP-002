import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });

  constructor(private router: Router) {}

  submitLoginForm() {
    console.log(this.loginForm.value);
    this.router.navigate(["employment"]);
  }
}
