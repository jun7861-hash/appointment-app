import { Event } from '@/components/appointment/events';

export const hasSelectedEvent = (obj: any): obj is Event => {
  return obj && obj.uid !== undefined;
};
