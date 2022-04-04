import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#F5BCBA', hoverBackgroundColor: '#F51C12' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#AF6DD6', hoverBackgroundColor: '#9929D6' },
      { data: [ 58, 28, 90, 9,  46, 77, 60 ], label: 'Series C', backgroundColor: '#9AA8EB', hoverBackgroundColor: '#427AEB' }
    ]
  };

    // events
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }

    public randomize(): void {
      console.log('Llegó');

      // Only Change 3 values
      this.barChartData.datasets[0].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
         ];
      this.barChartData.datasets[1].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
         ];
      this.barChartData.datasets[2].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
         ];

      this.chart?.update();
    }



}
