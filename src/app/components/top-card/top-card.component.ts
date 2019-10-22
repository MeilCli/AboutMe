import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-top-card",
  templateUrl: "./top-card.component.html",
  styleUrls: ["./top-card.component.scss"]
})
export class TopCardComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  path: string;

  constructor() {}

  ngOnInit() {}
}
