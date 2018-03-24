import { Injectable, Inject, Optional } from '@angular/core';
import { EventSubscriber, EVENT_SUBSCRIBERS } from './event-subscriber.interface';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventDispatcher {
  private events = new Map<string, Subject<any>>();
  constructor() {}

  registerSubscribers(subscribers: EventSubscriber[]){
    if(subscribers){
      subscribers.forEach((subscriber) => subscriber.register(this));
    }
  }

  getEvent(eventName: string): Observable<any> {
    if(!this.events.has(eventName)){
      this.registerEvent(eventName);
    }
    return this.events.get(eventName).asObservable();
  }

  registerEvent(eventName: string){
    this.events.set(eventName, new Subject<any>());
  }

  dispatch(eventName: string){
    if(!this.events.has(eventName)){
      this.registerEvent(eventName);
    }
    this.events.get(eventName).next();
  }
}
