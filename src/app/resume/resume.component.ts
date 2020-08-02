import { Component, OnInit, OnDestroy } from "@angular/core";
import { SkillService } from "../services/skill.service";
import { TimelineService } from "../services/timeline.service";
import { Title, Meta } from "@angular/platform-browser";
import { setDefaultMeta, setMeta } from "../head";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit, OnDestroy {
    skills: Skill[];
    colors = ["#ffc1ce", "#aedaf7", "#ffebbc", "#cbcbcc", "#b6e6e6", "#d5e4eb"];
    timelines: Timeline[];

    constructor(
        private title: Title,
        private meta: Meta,
        private skillService: SkillService,
        private timelineService: TimelineService
    ) {}

    ngOnInit() {
        setMeta(this.title, this.meta, {
            title: "MeilCliのレジュメ - MeilCli's AboutMe",
            description: "MeilCliのレジュメです",
        });

        this.skills = [];
        this.skillService.getSkills().subscribe((x) => (this.skills = x));
        this.timelines = [];
        this.timelineService.getTimelines().subscribe((x) => (this.timelines = x));
    }

    ngOnDestroy() {
        setDefaultMeta(this.title, this.meta);
    }
}
