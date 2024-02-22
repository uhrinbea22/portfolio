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
      description: 'This application I developed in Flutter, using Firebase as a backend service.<br/>csas',
      tags: ['Mobile App', 'Flutter', 'Dart' , 'Firebase'],
      image: '../assets/expense_management/mockup.png',
      showDescription: false
    },
    {
      name: 'Cyberstone',
      description: 'School project made with Angular, and Python django. Frontend programming and design skills.',
      tags: ['Angular', 'Design skills', 'Migration', 'Figma-Wireframes'],
      showDescription: false,
      cards: true,
    },
    {
      name: 'UI/UX designs',
      description: 'I was a part of a free course in which i have learned about web-development. This project focuses on graphic design and visual elements.',
      tags: ['Design', 'Graphics', 'Illustration'],

      showDescription: false,
      row : true
    },
    {
      name: 'Data analysis',
      description: 'Description of Project 4. A comprehensive description of the project and its impact.',
      tags: ['Web Development', 'React', 'API Integration'],
      image: 'path/to/project4.jpg',
      showDescription: false
    },
    {
      name: 'Wordpress Sites',
      description: 'I have made 2 wordpress sites. One of them uses Woocommerce, so it is a website, the other is just a descriptive site.',
      tags: ['Wordpress', 'Webdesign', 'Design skills'],
      image: 'path/to/project5.jpg',
      showDescription: false
    },
  ];
  showDescription(project: any) {
    project.showDescription = true;
  }

  hideDescription() {
    this.projects.forEach(project => project.showDescription = false);
  }
}
