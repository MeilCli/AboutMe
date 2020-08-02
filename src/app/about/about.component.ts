import { Component, OnInit, OnDestroy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { setDefaultMeta, setMeta } from "../head";
import { TimelineService } from "../services/timeline.service";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit, OnDestroy {
    timelines: Timeline[];

    constructor(private title: Title, private meta: Meta, private timelineService: TimelineService) {}

    ngOnInit() {
        setMeta(this.title, this.meta, {
            title: "MeilCliについて - MeilCli's AboutMe",
            type: "profile",
        });

        this.timelines = [];
        this.timelineService.getLiveTimelines().subscribe((x) => (this.timelines = x));
    }

    ngOnDestroy() {
        setDefaultMeta(this.title, this.meta);
    }
}
