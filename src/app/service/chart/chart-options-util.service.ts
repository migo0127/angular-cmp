import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ChartOptionsUtilService {

  constructor() {}

  getBaseBarChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          anchor: 'end',
          align: 'top',
        }
      },
    };
  }

  getBaseLineChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        y:
          {
            position: 'left',
          },
        // y1: {
        //   position: 'right',
        //   ticks: {
        //     color: 'red'
        //   }
        // }
      },
      plugins: {
        legend: { display: true },
      },
    }
  }

  getPieChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        datalabels: {
          formatter: (value: any, ctx: any) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      },
    }
  }

  getBaseDoughnutChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      },
      cutoutPercentage: 25,
    };
  }

}
