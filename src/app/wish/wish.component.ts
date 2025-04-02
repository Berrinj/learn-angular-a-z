import { Component, OnInit } from '@angular/core';
import { WishItem } from './../../shared/models/wishItems';
import { EventService } from "./../../shared/services/EventService";
import { WishService } from './wish.service';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';


@Component({
  selector: 'app-wish',
  imports: [AddWishFormComponent, WishFilterComponent, WishListComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  items : WishItem[] = [];

  filter: (item: WishItem) => boolean = () => true;

  title = 'Wishlist';

constructor(events: EventService, private wishService: WishService) {
  events.listen("removeWish", (wish : any) => {
    let index = this.items.indexOf(wish);
    this.items.splice(index, 1);
  });
  }

ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
  },
  (error: any) => {
    console.error('Error fetching wishes:', error);
    alert(error.message);
  },
);
}

}
