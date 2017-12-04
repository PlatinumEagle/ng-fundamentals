import { Component, OnInit } from '@angular/core';
import { Event } from './model/event';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '9:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        }
      },
      {
        id: 2,
        name: 'ngConf',
        date: '10/10/2036',
        time: '10:00 am',
        price: 300.00,
        imageUrl: '/app/assets/images/ng-conf.png',
        location: {
          address: '123 Main',
          city: 'Mountain View, CA',
          country: 'USA'
        }
      },
      {
        id: 3,
        name: 'some conference',
        date: '11/11/2036',
        time: '11:00 am',
        price: 1100.00,
        imageUrl: '/app/assets/images/some-conf.png',
        location: {
          address: '456 Broadway',
          city: 'Hometown, CO',
          country: 'USA'
        }
      }
    ];
  }

  ngOnInit() {}

}
