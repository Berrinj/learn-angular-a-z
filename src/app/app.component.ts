import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItems';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from "../shared/services/EventService";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  filter: (item: WishItem) => boolean = () => true;

  title = 'Wishlist';

constructor(events: EventService) {
  events.listen("removeWish", (wish : any) => {
    let index = this.items.indexOf(wish);
    this.items.splice(index, 1);
  });
  }

}
