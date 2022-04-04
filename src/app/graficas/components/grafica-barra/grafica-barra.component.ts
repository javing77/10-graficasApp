import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() nbarChartData!: ChartData<'bar'>
  @Input() horizontal: boolean = false ;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  public barChartData!: ChartData<'bar'> ;

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }


  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      // this.barrahorizontal = 'x'
        this.barChartOptions!.indexAxis = 'y'
    }

    this.barChartData =this.nbarChartData;

  }

}
