import { Component, OnInit } from "@angular/core";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  faTwitter = faTwitter;
  faGithub = faGithub;
  faSize: SizeProp = "2x";

  constructor() {}

  ngOnInit() {}
}
