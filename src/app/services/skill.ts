interface Skill {
    readonly category: string;
    readonly labels: SkillLabel[];
    readonly elements: SkillElement[];
}

interface SkillElement {
    readonly name: string;
    readonly point: number;
}

interface SkillLabel {
    readonly name: string;
    readonly point: number;
}
