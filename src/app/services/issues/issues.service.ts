import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class IssuesService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getIssues(query, page = 1) {
    var param = query.split("/");
    var url = `https://api.github.com/repos/${param[3]}/${param[4]}/issues?state=open&per_page=100&page=${page}`;
    return this.http
      .get(url)
      .pipe(tap(), catchError(this.handleError("getUrls", [])));
  }

  getLabelOpenIssues(query, label) {
    var param = query.split("/");
    var url = `https://api.github.com/repos/${param[3]}/${param[4]}/issues?labels=${label}`;
    return this.http
      .get(url)
      .pipe(tap(), catchError(this.handleError("getUrls", [])));
  }

  getLabelClosedIssues(query, label, page = 1) {
    var param = query.split("/");
    var url = `https://api.github.com/repos/${param[3]}/${param[4]}/issues?labels=${label}&state=closed&per_page=100&page=${page}`;
    return this.http
      .get(url)
      .pipe(tap(), catchError(this.handleError("getUrls", [])));
  }
}
