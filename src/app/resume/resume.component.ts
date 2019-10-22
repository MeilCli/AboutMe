import { Component, OnInit } from "@angular/core";
import { SkillService } from "../services/skill.service";
import { TimelineService } from "../services/timeline.service";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
  skills: Skill[];
  colors = ["#ffc1ce", "#aedaf7", "#ffebbc", "#cbcbcc", "#b6e6e6", "#d5e4eb"];
  timelines: Timeline[];

  constructor(
    private skillService: SkillService,
    private timelineService: TimelineService
  ) {}

  ngOnInit() {
    this.skills = [];
    this.skillService.getSkills().subscribe(x => (this.skills = x));
    this.timelines = [];
    this.timelineService.getTimelines().subscribe(x => (this.timelines = x));
  }
}
