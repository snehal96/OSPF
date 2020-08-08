import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MungellService } from "../RepoLinks/mungell/mungell.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-newproject",
  templateUrl: "./newproject.component.html",
  styleUrls: ["./newproject.component.scss"],
})
export class NewprojectComponent implements OnInit {
  newProjectForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private mungellservice: MungellService,
    private _router: Router
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
    var project = {
      title: this.newProjectForm.value.name,
      link: this.newProjectForm.value.link,
      label: this.newProjectForm.value.label,
      lang: this.newProjectForm.value.lang,
      desc: this.newProjectForm.value.desc,
    };

    this.mungellservice.addNewProject(project);

    this._router.navigate(["/list"]);
  }
}
