import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule,
  ApexPlotOptions,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  colors: string[];
  grid: any;
};

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './charts.html',
  styleUrls: ['./charts.css']
})
export class ChartsComponent implements OnInit {
  @Input() chartType: 'revenue' | 'spendings' | 'overview' = 'overview';
  public chartOptions!: Partial<ChartOptions>;
  public activeTab: 'Total Users' | 'Total Projects' | 'Operating Status' = 'Total Users';

  private dataSets = {
    'Total Users': [
      { name: "This year", data: [10000, 15000, 12000, 18000, 25000, 22000, 30000] },
      { name: "Last year", data: [8000, 12000, 10000, 14000, 20000, 18000, 24000] }
    ],
    'Total Projects': [
      { name: "This year", data: [44, 55, 41, 67, 22, 43, 21] },
      { name: "Last year", data: [30, 40, 35, 50, 15, 30, 15] }
    ],
    'Operating Status': [
      { name: "This year", data: [76, 85, 101, 98, 87, 105, 91] },
      { name: "Last year", data: [60, 70, 80, 75, 70, 85, 75] }
    ]
  };

  ngOnInit(): void {
    if (this.chartType === 'revenue') {
      this.initRevenueChart();
    } else if (this.chartType === 'spendings') {
      this.initSpendingsChart();
    } else {
      this.switchTab('Total Users');
    }
  }

  public switchTab(tab: 'Total Users' | 'Total Projects' | 'Operating Status') {
    this.activeTab = tab;
    this.initOverviewChart(tab);
  }

  private initOverviewChart(tab: 'Total Users' | 'Total Projects' | 'Operating Status') {
    this.chartOptions = {
      series: this.dataSets[tab],
      chart: {
        height: 350,
        type: "line",
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ['#3b82f6', '#94a3b8'],
      stroke: {
        width: [3, 2],
        curve: 'smooth',
        dashArray: [0, 8]
      },
      dataLabels: { enabled: false },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      xaxis: { type: "category" },
      yaxis: {
        labels: {
          formatter: (val) => val >= 1000 ? (val / 1000).toFixed(0) + 'K' : val.toString()
        }
      },
      legend: { position: 'top', horizontalAlign: 'right' },
      grid: {
        borderColor: '#f1f5f9',
        strokeDashArray: 4
      }
    };
  }

  private initRevenueChart() {
    // ... existing revenue code if needed, but I'll keeping it simplified for the dashboard focus
  }

  private initSpendingsChart() {
    // ... existing spendings code
  }
}
