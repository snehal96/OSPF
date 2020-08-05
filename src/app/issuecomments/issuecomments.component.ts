import { Component, OnInit } from "@angular/core";
import { IssuesService } from "../services/issues/issues.service";

@Component({
  selector: "app-issuecomments",
  templateUrl: "./issuecomments.component.html",
  styleUrls: ["./issuecomments.component.scss"],
})
export class IssuecommentsComponent implements OnInit {
  constructor(private issueservice: IssuesService) {}

  ngOnInit(): void {
    var query = this.issueservice.getCurrIssue();
    this.issueservice.getIssueComments(query).subscribe((data) => {
      console.log(data);
    });
  }
}
