import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import {APP_ROUTES} from './app.routes';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
