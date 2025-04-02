import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItems';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from "../shared/services/EventService";
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
