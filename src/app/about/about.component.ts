import { Component, OnInit, OnDestroy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { setDefaultMeta, setMeta } from "../head";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    setMeta(this.title, this.meta, {
      title: "MeilCliについて - MeilCli's AboutMe",
      type: "profile"
    });
  }

  ngOnDestroy() {
    setDefaultMeta(this.title, this.meta);
  }
}
