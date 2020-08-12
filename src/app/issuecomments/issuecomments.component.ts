import { Component, OnInit } from "@angular/core";
import { IssuesService } from "../services/issues/issues.service";

@Component({
  selector: "app-issuecomments",
  templateUrl: "./issuecomments.component.html",
  styleUrls: ["./issuecomments.component.scss"],
})
export class IssuecommentsComponent implements OnInit {
  constructor(private issueservice: IssuesService) {}

  comments: any;
  query: any;

  ngOnInit(): void {
    this.query = this.issueservice.getCurrIssue();
    console.log(this.query.body);
    console.log(this.query);
    this.issueservice.getIssueComments(this.query).subscribe((data) => {
      // for (var d in data) {
      //   data[d]["body"] = this.urlify(data[d]["body"]);
      // }
      this.comments = data;
    });
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + "</a>";
    });
  }
}
