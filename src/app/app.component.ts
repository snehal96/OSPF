import { Component } from "@angular/core";
import { MungellService } from "./RepoLinks/mungell/mungell.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "open-source-world";

  constructor(private mungellservice: MungellService) {}
  async ngOnInit() {
    this.mungellservice.setData();
  }
}
