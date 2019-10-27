import { Component, OnInit } from "@angular/core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Router, NavigationEnd } from "@angular/router";
import { GaService } from "./services/ga.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "AboutMe";
  faTwitter = faTwitter;
  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(private router: Router, private gaService: GaService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(x => x instanceof NavigationEnd))
      .subscribe(x => {
        const event = x as NavigationEnd;
        this.gaService.sendPageView(event.url);
      });
  }
}
