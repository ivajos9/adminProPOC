import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('subs', numero),
      error => console.error('Error', error),
      () => console.log('Observado finalizado')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Destruyendo');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {

      let cont = 0;

      const intervalo = setInterval(() => {
        cont += 1;

        let salida = {
          valor: cont
        }

        observer.next(salida);

        // if (cont === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (cont === 2) {
        //   observer.error('Aux!');
        // }
      }, 500);
    }).retry(2).map((resp: any) => {
      return resp.valor;
    }).filter( (valor, index) => {
      if (valor % 2 === 1) {
        return true;
      } else {
        return false;
      }
    });
  }

}
