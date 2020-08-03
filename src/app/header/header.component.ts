import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  faGithub = faGithub;
  faHome = faHome;
  faFileUpload = faFileUpload;
  faCommentDots = faCommentDots;

  constructor(public _router: Router) {}

  ngOnInit(): void {}
}
