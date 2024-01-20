import { clsx, type ClassValue } from 'clsx';
import { closestTo, format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

import { type Event } from '~/data/events';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLatestEventDate(events: Event[]) {
  const dates = events.map((event) => event.date);
  const latestDate = closestTo(new Date(), dates);
  return latestDate ? format(latestDate, 'yyyy-MM-dd') : null;
}

export function getLatestEvent(events: Event[]) {
  const latestEventDate = getLatestEventDate(events);
  if (!latestEventDate) {
    return events[events.length - 1];
  }
  return events.find((event) => event.date === latestEventDate);
}
