import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(private router: Router , private title: Title, private meta: Meta) {

      this.getDataRoute().subscribe(data => {
        console.log(data);
        this.label = data.titulo;

        // modificar titulo de pagina
        this.title.setTitle(this.label);

        // modificacion de metadata
        const metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };
        this.meta.updateTag(metaTag);
      });
  }

  getDataRoute() {

    return this.router.events
      .filter(event => event instanceof ActivationEnd)
      .filter(event => event.snapshot.firstChild === null)
      .map( event => event.snapshot.data);

  }

  ngOnInit() {
  }

}
