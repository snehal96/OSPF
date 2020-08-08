import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";

const url =
  "https://api.github.com/repos/snehal96/awesome-for-beginners/readme";

@Injectable({
  providedIn: "root",
})
export class MungellService {
  currProject: any;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getMarkdown(): Observable<any> {
    return this.http
      .get(url)
      .pipe(tap(), catchError(this.handleError("getUrls", [])));
  }

  data: any;
  setData() {
    this.getMarkdown().subscribe(async (data) => {
      var content = atob(data.content);
      var page = content.split("##");

      var projectList = [];
      for (var i = 2; i < page.length; i++) {
        // if (page[i].includes("xwiki")) {
        //   console.log(page[i]);
        // }
        var projects = page[i].split("- [");
        if (
          projects[0].includes("License") ||
          projects[0].includes("Contribute")
        )
          continue;
        else {
          var p = projects[0];
          for (var j = 1; j < projects.length; j++) {
            var temp = this.getProjectData(projects[j], p);
            // var image = await this.getImage(temp.title);
            // temp["img"] = image;
            projectList.push(temp);
          }
        }
      }

      this.data = projectList;
      sessionStorage.setItem("projectList", JSON.stringify(this.data));
    });
  }

  getProjectData(str, tag) {
    var obj = {
      title: "",
      link: "",
      label: "",
      desc: "",
      tag: tag,
    };

    obj.title = str.split("]")[0];
    obj.desc = this.setDesc(str.split("<br>")[1]);

    var x = str.split("_")[1].split("label: ")[1];
    if (x != undefined) obj.label = x.substring(0, x.length - 1);
    obj.link = str.split("(")[1].split("label")[0];
    return obj;
  }

  setDesc(str) {
    var k = str.split("](");
    var desc = "";

    for (var i = 0; i < k.length - 1; i++) {
      var a = k[i].lastIndexOf("[");
      var b = k[i + 1].indexOf(")");
      if (a != null && b != null) {
        var m = k[i].substring(a + 1, k[i].length);
        var n = k[i + 1].substring(0, b);
        desc +=
          k[i].substring(0, a) +
          "<a href='" +
          n +
          "'> " +
          m +
          "</a> " +
          k[i + 1].substring(b + 2);
      }
    }

    // console.log(desc);
    if (desc != "") return desc;
    else return str;
  }

  getImage(query) {}

  addNewProject(project) {
    this.data.push(project);
    sessionStorage.setItem("projectList", JSON.stringify(this.data));
    // addToSource();
  }

  getData() {
    return this.data;
  }

  setCurrProject(project) {
    this.currProject = project;
  }

  getCurrProject() {
    return this.currProject;
  }
}
