import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  mobile: any;
  constructor(public _router: Router) {}

  profile: any = "https://github.com/snehal96";

  ngOnInit(): void {
    if (window.innerWidth < 500) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  linkToGithub() {
    window.location.href = this.profile;
  }
}
