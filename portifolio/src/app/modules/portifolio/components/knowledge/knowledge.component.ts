import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayIcons = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: "Angular Icon."
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: "CSS3 Icon."
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: "HTML5 Icon."
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: "Java Icon."
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: "Javascript Icon."
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: "Python Icon."
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: "SASS Icon."
    }
  ])
}
