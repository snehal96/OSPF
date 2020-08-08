import { Component, OnInit } from "@angular/core";
import { MungellService } from "../RepoLinks/mungell/mungell.service";
import { IssuesService } from "../services/issues/issues.service";

@Component({
  selector: "app-projectlistdetails",
  templateUrl: "./projectlistdetails.component.html",
  styleUrls: ["./projectlistdetails.component.scss"],
})
export class ProjectlistdetailsComponent implements OnInit {
  constructor(
    private mungellservice: MungellService,
    private issuesservice: IssuesService
  ) {}

  project: any;
  issues: any;
  labelOpenIssues: any;
  labelClosedIssues: any;

  ngOnInit(): void {
    console.log(this.labelOpenIssues);
    if (this.labelOpenIssues == undefined) {
      this.labelOpenIssues = [];
      this.labelClosedIssues = [];
      this.issues = [];
    }
    this.project = this.mungellservice.getCurrProject();
    this.issuesservice.getIssues(this.project.link).subscribe((data) => {
      this.issues = data;
    });
    this.issuesservice
      .getLabelOpenIssues(this.project.link, this.project.label)
      .subscribe((data) => {
        this.labelOpenIssues = data;
        // console.log(this.labelOpenIssues[0]);
      });

    this.issuesservice
      .getLabelClosedIssues(this.project.link, this.project.label)
      .subscribe((data) => {
        this.labelClosedIssues = data;
        // console.log(this.labelClosedIssues[0]);
      });
  }

  getLabelIssues(data) {}

  step = 0;

  setStep(index: number) {
    this.step = index;
  }
}
