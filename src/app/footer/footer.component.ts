import { Component, OnInit } from "@angular/core";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
    faTwitter = faTwitter;
    faGithub = faGithub;

    constructor() {}

    ngOnInit() {}
}
