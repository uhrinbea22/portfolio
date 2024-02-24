import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Expense Management Application',
      description: 'I have developed this application in Flutter, using Firebase as a backend service.\n' +
        'It was my first time developing an application for mobile. \n ',
      tags: ['Mobile App', 'Flutter', 'Dart' , 'Firebase'],
      image: '../assets/expense_management/as.png',
    },
    {
      name: 'Cyberstone',
      description: 'School project made with Angular, and Python django. Frontend programming and design skills.',
      tags: ['Angular', 'Design skills', 'Wireframes'],
      cards: true,
    },
    {
      name: 'Data analysis',
      description: 'Description of Project 4. A comprehensive description of the project and its impact.',
      tags: ['Web Development', 'React', 'API Integration'],
    },
    {
      name: 'Woocommerce Wordpress Site',
      description: 'I have made 2 wordpress sites. One of them uses Woocommerce, so it is a website, the other is just a descriptive site.',
      tags: ['Wordpress', 'Webdesign', 'Design skills'],
      image: '../assets/wp/ac_mockup.png',
    },
    {
      name: 'Wordpress Site',
      description: 'I have made 2 wordpress sites. One of them uses Woocommerce, so it is a website, the other is just a descriptive site.',
      tags: ['Wordpress', 'Webdesign', 'Design skills'],
      image: '../assets/wp/general_mockup.png',
    },
    {
      name: 'UI/UX designs',
      description: 'I was a part of a free course in which i have learned about web-development. This project focuses on graphic design and visual elements.',
      tags: ['Design', 'Graphics', 'Illustration'],
    },
  ];

}
