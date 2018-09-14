import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input("labels") MyLabels: string[] = [];
  @Input("datos") MyData: number[] = [];
  @Input("tipo") MyType: string = "doughnut";
  @Input("leyenda") MyLegend: string = "";

  constructor() {

   }

  ngOnInit() {
  }

}
