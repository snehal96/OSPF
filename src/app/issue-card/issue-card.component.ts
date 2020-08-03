import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-issue-card",
  templateUrl: "./issue-card.component.html",
  styleUrls: ["./issue-card.component.scss"]
})
export class IssueCardComponent implements OnInit {
  @Input() query: any;

  constructor() {}

  ngOnInit(): void {}
}
