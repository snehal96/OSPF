import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IssuesService } from "../services/issues/issues.service";

@Component({
  selector: "app-issue-card",
  templateUrl: "./issue-card.component.html",
  styleUrls: ["./issue-card.component.scss"],
})
export class IssueCardComponent implements OnInit {
  @Input() query: any;

  constructor(private router: Router, private issueservice: IssuesService) {}

  ngOnInit(): void {}

  linkToComment() {
    this.issueservice.setCurrIssue(this.query);
    this.router.navigate([this.router.url, this.query.number]);
  }
}
