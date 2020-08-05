import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ProjectlistComponent } from "./projectlist/projectlist.component";
import { ProjectlistdetailsComponent } from "./projectlistdetails/projectlistdetails.component";
import { NewprojectComponent } from "./newproject/newproject.component";
import { ContactComponent } from "./contact/contact.component";
import { IssuecommentsComponent } from "./issuecomments/issuecomments.component";

const routes: Routes = [
  { path: "list", component: ProjectlistComponent },
  { path: "list/:id", component: ProjectlistdetailsComponent },
  { path: "list/:id/:num", component: IssuecommentsComponent },
  { path: "new", component: NewprojectComponent },
  { path: "contact", component: ContactComponent },
  { path: "", component: MainComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
