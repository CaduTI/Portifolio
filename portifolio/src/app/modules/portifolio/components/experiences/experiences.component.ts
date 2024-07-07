import { Component, signal } from '@angular/core';
//Interface
import { IExperience } from '../../interface/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      summary: {
        strong: "Analista de dados",
        p: "dez de 2022 - abr de 2024"
      },
      text: "<p>-Criação e documentação dos modelos de dados<p/><p>-Criação do script de geração e alimentação do modelo utilizando pyspark e com a AWS.<p/><p>-Criação das tabelas nos ambientes sql developer.<p/><p>Criação de pipelines de automação de script e rotinas.<p/><p>-Suporte ao time de desenvolvedores.</p>"
    },
    {
      summary: {
        strong: "Estagiário em Ciência de dados",
        p: "abr de 2022 - dez de 2022"
      },
      text: "<p>- Atendimento de Tasks junto ao time de desenvolvedores, Banco de dados e Compliance, uso diário de ferramentas como Databricks, Pyspark, Azure DevOps, SQL Server,Excel e PowerBI.</p><p>Desenvolvimento de dashboards com PowerBi.</p><p>-Criação de pipelines de automação de script e rotinas.</p><p>-Desenvolvimento de dataframes para análise de volumetria dos dados.</p><p>-Levantamento dos indicadores dos times</p>"
    },

  ])
}
