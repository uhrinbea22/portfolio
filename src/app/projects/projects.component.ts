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
      description: 'An app for tracking your expense and income. Detailed transactions, balance, limits, calendar view, diagrams.',
      tags: ['Mobile App', 'Flutter', 'Dart' , 'Firebase'],
      image: '../assets/expense_management/as.png',
      link:'https://github.com/uhrinbea22/XPT'
    },
    {
      name: 'Card game cards',
      description: 'Futuristic robot-themed images generated with MidJourney, styled with Pixlr',
      tags: ['Design skills', 'AI'],
      cards: true,
    },

    {
      name: 'Woocommerce Wordpress Site',
      description: 'Webshop page for a cakery.',
      tags: ['Wordpress', 'Webdesign'],
      image: '../assets/wp/ac_mockup.png',
      link:'https://cukraszdaac.eu/wp/'
    },
    {
      name: 'Wordpress Site',
      description: 'Business website for a building company. ',
      tags: ['Wordpress', 'Webdesign', 'Design skills'],
      image: '../assets/wp/general_mockup.png',
      link:'https://general-sprint.com/'
    },
    {
      name: 'Data analysis (About Popular K-Dramas)',
      description: 'Some basic assumptions from the data, which I downloaded from Kaggle.I used Jupyter Notebook (Python) for analysing the data.',
      tags: ['Jupyter Notebook', 'Basic Data Analysis', 'Python'],
      link:'https://github.com/uhrinbea22/Data-analysis-'
    },

  ];

}
