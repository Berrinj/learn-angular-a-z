import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from "../../../shared/services/EventService";
// import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItems';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
@Input() wish! : WishItem;

get cssClasses() {
  // return this.fullfilled ? ['strikeout', 'text-muted'] : [''];
  return {"strikeout text-muted": this.wish.isComplete};
  // return {
  //   strikeout: this.wish.isComplete,
  //   'text-muted': this.wish.isComplete,
  // };
}

constructor(private events: EventService) { };


removeWish() {
  this.events.emit('removeWish', this.wish);
  // this.wishText = '';
}

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
