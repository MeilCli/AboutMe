interface Skill {
  readonly category: string;
  readonly elements: SkillElement[];
}

interface SkillElement {
  readonly name: string;
  readonly point: number;
}
