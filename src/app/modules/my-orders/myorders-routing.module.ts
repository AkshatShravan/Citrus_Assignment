import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './my-orders.component';

const routes: Routes = [
  {path:'', redirectTo:'my-bookings',pathMatch:'full'},
  {path:'my-bookings',component:MyOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrdersRoutingModule { }