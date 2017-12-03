import { Location } from './location';

export class Event {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location: Location;

  constructor() { }
}
