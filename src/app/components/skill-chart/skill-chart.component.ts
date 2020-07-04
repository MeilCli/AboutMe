import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartType, ChartOptions } from "chart.js";
import * as annotationPlugin from "chartjs-plugin-annotation";
import { Label } from "ng2-charts";

@Component({
  selector: "app-skill-chart",
  templateUrl: "./skill-chart.component.html",
  styleUrls: ["./skill-chart.component.scss"]
})
export class SkillChartComponent implements OnInit {
  colors = [
    "#ffc1ce",
    "#aedaf7",
    "#ffebbc",
    "#cbcbcc",
    "#b6e6e6",
    "#d5e4eb",
    "#ffc1ce",
    "#aedaf7",
    "#ffebbc",
    "#cbcbcc",
    "#b6e6e6",
    "#d5e4eb",
    "#ffc1ce",
    "#aedaf7",
    "#ffebbc",
    "#cbcbcc",
    "#b6e6e6",
    "#d5e4eb"
  ];

  @Input()
  skill: Skill;

  chartTitle = "";
  chartPlugins = [annotationPlugin];
  chartType: ChartType = "bar";
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [{}],
      yAxes: [{ ticks: { min: 0, max: 100, stepSize: 20 } }]
    },
    tooltips: {
      callbacks: {
        label: (tootipItem, data) => {
          return `Point: ${
            data.datasets[tootipItem.datasetIndex].data[tootipItem.index]
          }`;
        }
      }
    },
    annotation: {
      annotations: []
    }
  };
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [];

  constructor() {}

  ngOnInit() {
    this.chartTitle = this.skill.category;

    const labels: Label[] = [];
    const data: number[] = [];
    for (const element of this.skill.elements) {
      labels.push(element.name);
      data.push(element.point);
    }
    this.chartLabels = labels;
    const colorSelector: (alpha: string) => string[] = alpha => {
      return this.colors.map(x => `${x}${alpha}`);
    };
    this.chartData = [
      {
        data,
        borderColor: colorSelector("9e"),
        backgroundColor: colorSelector("6e"),
        hoverBackgroundColor: colorSelector("de"),
        hoverBorderColor: colorSelector("de")
      } as ChartDataSets
    ];

    this.chartOptions.annotation.annotations = [];
    for (const label of this.skill.labels) {
      this.chartOptions.annotation.annotations.push({
        drawTime: "afterDatasetsDraw",
        type: "line",
        mode: "horizontal",
        borderColor: "black",
        borderWidth: 3,
        value: label.point,
        scaleID: "y-axis-0",
        label: {
          backgroundColor: "#3cb371",
          content: label.name,
          enabled: true
        }
      });
    }
  }
}
