import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  cards = [
    [
      {
        title: 'Observer',
        heading: 'An example of using Observers and Subjects',
        name: 'observers',
        project: 'angular-observers',
        tutorial: 'observer/tutorial'
      },
      {
        title: 'Http Client',
        heading: 'An example of using Observers and Subjects',
        name: 'http-client',
        project: 'angular-http-client'
      },
      {
        title: 'Routing',
        heading: 'An example of using Observers and Subjects',
        name: 'routing',
        project: 'angular-routing'
      }
    ],
    [
      {
        title: 'RabbitMQ',
        heading: 'An example of using Observers and Subjects',
        name: 'rabbitmq',
        project: 'angular-rabbitmq'
      },
      {
        title: 'Services',
        heading: 'An example of using Angular Services',
        name: 'services',
        project: 'angular-services'
      },
      {
        title: 'Leaflet Mapper',
        heading: 'An example of using Observers and Subjects',
        name: 'leaflet-mapper',
        project: 'angular-leaflet-mapper'
      },
    ],
    [
      {
        title: 'Skeleton',
        heading: 'An angular project with skeleton widgets for quick start',
        name: 'rabbitmq',
        project: 'angular-skeleton'
      },
      // {
      //   title: 'Services',
      //   heading: 'An example of using Angular Services',
      //   name: 'services',
      //   project: 'angular-services'
      // },
      // {
      //   title: 'Leaflet Mapper',
      //   heading: 'An example of using Observers and Subjects',
      //   name: 'leaflet-mapper',
      //   project: 'angular-leaflet-mapper'
      // },
    ]
  ];
  constructor() { }

  ngOnInit() {
  }

}
