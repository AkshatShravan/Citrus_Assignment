import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchModule } from '../search/search.module';
import { ProfileModule } from '../profile/profile.module';
import { MyOrdersModule } from '../my-orders/my-orders.module';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    SearchModule,
    ProfileModule,
    MyOrdersModule
  ]
})
export class LayoutModule { }
