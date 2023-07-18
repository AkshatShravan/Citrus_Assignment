import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { MyOrdersComponent } from './my-orders.component';
import { MyOrdersRoutingModule } from './myorders-routing.module';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    CardsComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    MyOrdersRoutingModule,
    MatTabsModule
  ]
})
export class MyOrdersModule { }
