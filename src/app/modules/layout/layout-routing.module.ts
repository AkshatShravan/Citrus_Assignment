import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SearchComponent } from '../search/search.component';
import { HelpComponent } from '../help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'', component: LayoutComponent, children:[
    {path:'', redirectTo: 'search', pathMatch: 'full'},
    {path:'search', component: SearchComponent},
    {path:'help', component: HelpComponent},
    {path:'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)},
    {path:'orders', loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersModule)},
    {path:'services', loadChildren: () => import('../services/services.module').then(m => m.ServicesModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
