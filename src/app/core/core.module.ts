import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouterModule } from '../app.router.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRouterModule
  ],
  exports: [
    AppRouterModule,
    HeaderComponent
  ]
})
export class CoreModule { }
