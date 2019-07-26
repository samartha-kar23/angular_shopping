import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StoreComponent, CartSummaryComponent, 
    CartDetailComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule
  ],
  exports: [StoreComponent, 
    CartDetailComponent, CheckoutComponent]

})
export class StoreModule { }
