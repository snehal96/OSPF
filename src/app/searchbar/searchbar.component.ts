import { Component, OnInit } from "@angular/core";
import { MungellService } from "../RepoLinks/mungell/mungell.service";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"],
})
export class SearchbarComponent implements OnInit {
  public search2 = "";
  projectList: any;
  currProject: any;

  constructor(public mungellservice: MungellService) {}

  ngOnInit(): void {
    this.projectList = this.mungellservice.getData();
  }

  selectedTempStatic(item) {
    this.search2 = item.title;
    this.currProject = item;
  }

  linkToGithub() {
    if (this.currProject.link) window.location.href = this.currProject.link;
  }
}
