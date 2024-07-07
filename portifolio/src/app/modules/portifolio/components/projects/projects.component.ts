import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/projects.interface';

//Angular Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

//Enum
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    });
  }
  public arrayProjects = signal<IProjects[]>([
    {
      a: 'Simple Ecommerce Cart',
      src: 'assets/icons/github.svg',
      alt: 'Simple Ecommerce Cart',
      title: 'Simple Ecommerce Cart',
      width: '100px',
      height: '50px',
      description: '<p> Um projeto simples que visa simular um carrinho de compras de um Ecommerce, utilizando Spring Boot com Java 17.</p>',
      links: [{
        name: 'Conheça o projeto!',
        href: 'https://github.com/CaduTI/simple-ecommerce-cart'
      }]
    },
    {
      a: 'Simple API with spring boot',
      src: 'assets/icons/github.svg',
      alt: 'Simple API with spring boot',
      title: 'Simple API with spring boot',
      width: '100px',
      height: '50px',
      description: '<p>Uma simples API utilizando Spring Boot com Java 17.</p>',
      links: [{
        name: 'Conheça o projeto!',
        href: 'https://github.com/CaduTI/simple-api-with-spring-boot-java'
      }]
    },
    {
      a: 'Portifólio',
      src: 'assets/icons/github.svg',
      alt: 'Portifólio Site',
      title: 'Portifólio Site',
      width: '100px',
      height: '50px',
      description: 'Um site criado para mostrar meus conhecimentos e experiências na área de tecnologia.',
      links: [{
        name: 'Conheça o projeto!',
        href: 'https://github.com/CaduTI/Portifolio'
      }]
    }

  ])


}
