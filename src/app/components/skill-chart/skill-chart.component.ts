import { Component, OnInit, Input } from "@angular/core";
import { Chart ,ChartConfiguration, ChartDataset, ChartType, ChartData } from "chart.js";
import { default as Annotation } from "chartjs-plugin-annotation";

@Component({
    selector: "app-skill-chart",
    templateUrl: "./skill-chart.component.html",
    styleUrls: ["./skill-chart.component.scss"],
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
        "#d5e4eb",
    ];

    @Input()
    skill: Skill;

    chartTitle = "";
    chartType: ChartType = "bar";
    chartOptions: ChartConfiguration["options"] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {display: false},
            annotation: {
                annotations: []
            }
        },
        scales: {
            x: {},
            y: { min: 0, max: 100}
        }
    };
    chartData: ChartData = {
        labels: [],
        datasets: []
    };

    constructor() {
         Chart.register(Annotation);
    }

    ngOnInit() {
        this.chartTitle = this.skill.category;

        const labels: string[] = [];
        const data: number[] = [];
        for (const element of this.skill.elements) {
            labels.push(element.name);
            data.push(element.point);
        }
        this.chartData.labels = labels;
        const colorSelector: (alpha: string) => string[] = (alpha) => {
            return this.colors.map((x) => `${x}${alpha}`);
        };
        this.chartData.datasets = [
            {
                data,
                borderColor: colorSelector("9e"),
                backgroundColor: colorSelector("6e"),
                hoverBackgroundColor: colorSelector("de"),
                hoverBorderColor: colorSelector("de"),
            } as ChartDataset,
        ];
        this.chartOptions.plugins.annotation.annotations = [];
        for (const label of this.skill.labels) {
            this.chartOptions.plugins.annotation.annotations.push({
                type: "line",
                borderColor: "black",
                borderWidth: 3,
                yMin: label.point,
                yMax: label.point,
                label: {
                    backgroundColor: "#3cb371",
                    content: label.name,
                    display: true
                },
            });
        }
    }
}
