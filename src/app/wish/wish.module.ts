import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WishListComponent } from './wish-list/wish-list.component';
// import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
// import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishComponent } from './wish.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    WishComponent,
  ],
  exports: [WishComponent],
})
export class WishModule { }
