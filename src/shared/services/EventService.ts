import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private subject = new Subject<any>();

  emit(eventName: string, payload: any) {
this.subject.next({ eventName, payload });
  }

  listen(eventName: string, callback : (event : any ) => void) {
    this.subject.asObservable().subscribe((nextObj : any) => {
      if (nextObj.eventName === eventName) {
        callback(nextObj.payload);
      }
    })
  }
}

