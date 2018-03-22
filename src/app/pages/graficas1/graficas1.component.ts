import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    'grafico1': {
      'labels': ['Archivos Parciales', 'Definitivos', 'Fullstack'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'IMG'
    },
    'grafico2': {
      'labels': ['IMG', 'FS'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Tipos de Transacciones Procesadas'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': 'Bajos'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': ''
    },
  };

  constructor() { }

  ngOnInit() {}
  // events


}
