import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MungellService } from "../RepoLinks/mungell/mungell.service";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-newproject",
  templateUrl: "./newproject.component.html",
  styleUrls: ["./newproject.component.scss"],
})
export class NewprojectComponent implements OnInit {
  newProjectForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private _router: Router,
    private http: HttpClient
  ) {
    this.newProjectForm = this.fb.group({
      name: "",
      link: "",
      label: "",
      lang: "",
      desc: "",
    });
  }

  ngOnInit(): void {}

  submitForm() {
    const body = new HttpParams()
      .set("form-name", "project")
      .append("name", this.newProjectForm.value.name)
      .append("link", this.newProjectForm.value.link)
      .append("label", this.newProjectForm.value.label)
      .append("language", this.newProjectForm.value.lang)
      .append("description", this.newProjectForm.value.desc);

    this.http
      .post("/", body.toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .subscribe(
        (res) => {},
        (err) => {
          if (err instanceof ErrorEvent) {
            //client side error
            alert("Something went wrong when sending your message.");
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              this._router.navigate(["/success"]);
            } else {
              alert("Something went wrong when sending your message.");
              console.log("Error status:");
              console.log(err.status);
              console.log("Error body:");
              console.log(err.error);
            }
          }
        }
      );
  }
}
