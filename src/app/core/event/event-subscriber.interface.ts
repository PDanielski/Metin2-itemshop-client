import { InjectionToken } from '@angular/core';
import { EventDispatcher } from "./event-dispatcher.service";

export interface EventSubscriber {
    register(eventDisptacher: EventDispatcher)
}

export const EVENT_SUBSCRIBERS = new InjectionToken<EventSubscriber[]>('app.event.subscribers');