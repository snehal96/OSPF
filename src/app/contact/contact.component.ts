import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { HttpParams, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: "",
      feedback: "",
      email: "",
      tid: "",
      contact: 0,
    });
  }

  ngOnInit(): void {}

  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }

  submitForm() {
    const body = new HttpParams()
      .set("form-name", "contact")
      .append("name", this.contactForm.value.name)
      .append("feedback", this.contactForm.value.feedback)
      .append("email", this.contactForm.value.email)
      .append("Telegram id", this.contactForm.value.tid)
      .append("contact", this.contactForm.value.contact);

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
              alert("Your message has been sent!");
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
