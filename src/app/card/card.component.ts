import { Component, OnInit, Input } from "@angular/core";
import { MungellService } from "../RepoLinks/mungell/mungell.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() query: any;

  constructor(private mungelservice: MungellService, public _router: Router) {}

  ngOnInit(): void {}

  linkToProjectDetail() {
    this.mungelservice.setCurrProject(this.query);
    this._router.navigate(["/list", this.query.title]);
  }

  linkToGithub($event: MouseEvent) {
    if (true) {
      $event.stopPropagation();
      window.location.href = this.query.link;
    }
  }
}
