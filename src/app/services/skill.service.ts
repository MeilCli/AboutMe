import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class SkillService {
    private url = "assets/skills.json";

    constructor(private httpClient: HttpClient) {}

    getSkills(): Observable<Skill[]> {
        return this.httpClient.get<Skill[]>(this.url).pipe(map((x) => this.sortSkills(x)));
    }

    private sortSkills(skills: Skill[]): Skill[] {
        for (const skill of skills) {
            skill.elements.sort((x, y) => x.name.localeCompare(y.name));
        }

        return skills;
    }
}
