import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-skill-chart",
  templateUrl: "./skill-chart.component.html",
  styleUrls: ["./skill-chart.component.scss"]
})
export class SkillChartComponent implements OnInit {
  @Input()
  skill: Skill;
  @Input()
  color: string;

  chartType: ChartType = "radar";
  chartOptions: RadialChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: { ticks: { suggestedMin: 0, suggestedMax: 5, stepSize: 1 } },
    tooltips: {
      callbacks: {
        label: (tootipItem, data) => {
          return `Level: ${
            data.datasets[tootipItem.datasetIndex].data[tootipItem.index]
          }`;
        }
      }
    }
  };
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [];

  constructor() {}

  ngOnInit() {
    const labels: Label[] = [];
    const data: number[] = [];
    for (const element of this.skill.elements) {
      labels.push(element.name);
      data.push(element.point);
    }
    this.chartLabels = labels;
    this.chartData = [
      {
        data,
        label: this.skill.category,
        borderColor: `${this.color}9e`,
        backgroundColor: `${this.color}6e`,
        pointBackgroundColor: `${this.color}de`,
        pointBorderColor: `${this.color}de`
      } as ChartDataSets
    ];
  }
}
