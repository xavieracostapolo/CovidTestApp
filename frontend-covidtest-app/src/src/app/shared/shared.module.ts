import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MyLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MyLoaderComponent
  ]
})
export class SharedModule { }
