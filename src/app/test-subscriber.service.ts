import { Injectable } from '@angular/core';
import { EventSubscriber } from './core/event/event-subscriber.interface';
import { EventDispatcher } from './core/event/event-dispatcher.service';


@Injectable()
export class TestSubscriber implements EventSubscriber {
  private walletUpdateIntervalId;
  constructor() { }

  register(eventDispatcher: EventDispatcher){
  }

}
