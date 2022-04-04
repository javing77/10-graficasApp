import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {


  public barChartData: ChartData<'bar'> = {
    labels: [ '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56 ], label: 'Vendedor A', backgroundColor: '#F5BCBA', hoverBackgroundColor: '#F51C12' },
      { data: [ 28, 48, 40, 19, 86 ], label: 'Vendedor B', backgroundColor: '#AF6DD6', hoverBackgroundColor: '#9929D6' },
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
