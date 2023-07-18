import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { CardsComponent } from './components/cards/cards.component';
import { InviteTemplateComponent } from './components/invite-template/invite-template.component';
import { OffersComponent } from './components/offers/offers.component';
import { MultiCardComponent } from './components/multi-card/multi-card.component';


@NgModule({
  declarations: [
       SearchComponent,
       SearchFieldComponent,
       SearchResultComponent,
       RecentOrdersComponent,
       CardsComponent,
       InviteTemplateComponent,
       OffersComponent,
       MultiCardComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
