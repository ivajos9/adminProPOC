import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(mensaje => console.log('termino', mensaje),
      ).catch( error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{
    return  new Promise((resolve, reject) => {

      let cont = 0;
      const intervalo = setInterval(() => {
        cont += 1;

        if (cont === 3) {
          // reject('Erorr')
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
