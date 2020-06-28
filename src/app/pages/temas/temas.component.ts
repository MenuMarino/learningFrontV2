import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {

  public copy: string;
  constructor() { }

  ngOnInit() {
    
  }
  public temas: any[] = [
    {
      name: "Polinomios 1",
      professor: "Bellido",
      description: "3 videos de Polinomios",
      learning_points: "3",
    },
    {
      name: "Polinomios2",
      professor: "Yamilet",
      description: "2 videos de Polinomios",
      learning_points: "5",
    },
    {
      name: "Ecuaciones 2",
      professor: "Jose Maria",
      description: "Ejercicios y videos",
      learning_points: "3",
    },
    {
      name: "Polinomios",
      professor: "Juan",
      description: "Solo ejercicios",
      learning_points: "4",
    },
    {
      name: "Ecuaciones 1",
      professor: "Carlos",
      description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
      learning_points: "3",
    },
    {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      
  ]
}
