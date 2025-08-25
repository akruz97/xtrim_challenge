import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};

@Component({
  selector: 'app-gauge-balance',
  imports: [NgApexchartsModule],
  standalone: true,
  templateUrl: './gauge-balance.html',
  styleUrl: './gauge-balance.css',
})

/**
 * GaugeBalance
 * Muestra el gráfico de balance de minutos/datos.
 */
export class GaugeBalance implements OnChanges {
  @Input() totalMinutes: number = 0; // valor dinámico desde el padre
  @Input() usedMinutes: number = 0; // valor dinámico desde el padre
  @Input() label: string = ''; // texto dinámico

  chartOptions: ChartOptions = {
    series: [0],
    chart: { type: 'radialBar', height: 250 },
    plotOptions: {
      radialBar: {
        hollow: { size: '50%' },
        dataLabels: { name: { show: true }, value: { show: true, formatter: (val) => `${val}%` } },
      },
    },
    fill: { colors: ['#00E396'] },
    labels: ['Minutos Consumidos'],
  };

  constructor() {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Cada vez que cambian los inputs, actualizamos el gráfico
    this.updateChart();
  }

  updateChart() {
    let percentage = 0;

    if (this.totalMinutes > 0) {
      percentage = (this.usedMinutes / this.totalMinutes) * 100;
      percentage = Math.min(percentage, 100);
    }
    this.chartOptions = {
      series: [percentage],
      chart: { type: 'radialBar', height: 250 },
      plotOptions: {
        radialBar: {
          hollow: { size: '50%' },
          dataLabels: {
            name: { show: true },
            value: { show: true, formatter: (val: number) => `${val.toFixed(0)}%` },
          },
        },
      },
      fill: { colors: ['#3F1A69'] },
      labels: [this.label],
    };
  }
}
