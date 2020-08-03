import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(public _router: Router) {}

  profile: any = "https://github.com/snehal96";

  ngOnInit(): void {}

  linkToGithub() {
    window.location.href = this.profile;
  }
}
