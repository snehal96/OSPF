import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MungellService } from "../RepoLinks/mungell/mungell.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-projectlist",
  templateUrl: "./projectlist.component.html",
  styleUrls: ["./projectlist.component.scss"],
})
export class ProjectlistComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  project: any;
  pagedList: any;
  projectSize: any;

  constructor(
    private http: HttpClient,
    private mungellservice: MungellService
  ) {}

  ngOnInit(): void {
    var temp = sessionStorage.getItem("projectList");
    if (temp != undefined) {
      this.project = JSON.parse(temp);
    } else {
      this.project = this.mungellservice.getData();
    }

    this.pagedList = this.project.slice(0, 40);
    this.projectSize = 40;
  }

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.project.length) {
      endIndex = this.project.length;
    }
    this.pagedList = this.project.slice(startIndex, endIndex);
  }
}
