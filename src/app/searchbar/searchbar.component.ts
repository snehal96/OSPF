import { Component, OnInit } from "@angular/core";
import { MungellService } from "../RepoLinks/mungell/mungell.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"],
})
export class SearchbarComponent implements OnInit {
  public search2 = "";
  projectList: any;
  currProject: any;

  constructor(public mungellservice: MungellService, private _router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem("projectList") != undefined)
      this.projectList = JSON.parse(sessionStorage.getItem("projectList"));
    else this.projectList = this.mungellservice.getData();
  }

  selectedTempStatic(item) {
    this.search2 = item.title;
    this.currProject = item;
    this.mungellservice.setCurrProject(this.currProject);
    this._router.navigate(["/list", this.currProject.title]);
  }

  linkToGithub() {
    if (this.currProject.link) window.location.href = this.currProject.link;
  }
}
