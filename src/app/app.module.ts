import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxTypeaheadModule } from "ngx-typeahead";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ShowdownModule } from "ngx-showdown";
// import * as highlightExtension from "showdown-highlight";

import { MungellService } from "./RepoLinks/mungell/mungell.service";
import { IssueCardComponent } from "./issue-card/issue-card.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestingComponent } from "./testing/testing.component";
import { MainComponent } from "./main/main.component";
import { ProjectlistComponent } from "./projectlist/projectlist.component";
import { CardComponent } from "./card/card.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { LabelComponent } from "./label/label.component";
import { ProjectlistdetailsComponent } from "./projectlistdetails/projectlistdetails.component";
import { ContactComponent } from "./contact/contact.component";
import { NewprojectComponent } from "./newproject/newproject.component";
import { IssuecommentsComponent } from "./issuecomments/issuecomments.component";

import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FooterComponent } from "./footer/footer.component";
import { SuccessComponent } from "./success/success.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestingComponent,
    MainComponent,
    ProjectlistComponent,
    CardComponent,
    SearchbarComponent,
    LabelComponent,
    ProjectlistdetailsComponent,
    IssueCardComponent,
    ContactComponent,
    NewprojectComponent,
    FooterComponent,
    IssuecommentsComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypeaheadModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatPaginatorModule,
    ShowdownModule.forRoot({
      emoji: true,
      noHeaderId: true,
      flavor: "github",
    }),
  ],
  providers: [MungellService],
  bootstrap: [AppComponent],
})
export class AppModule {}
