import { Component } from "@angular/core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AboutMe";
  faTwitter = faTwitter;
  model = {
    left: true,
    middle: false,
    right: false
  };
}
