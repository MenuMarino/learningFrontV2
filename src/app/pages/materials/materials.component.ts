import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public materiales: any[] = [
    {
      name: "Polinomios",
      status: "Pendiente",
      imagen: "ni ni-ruler-pencil",
      curated_by: "-----",
      views: "0",
      learning_points: "3",
    },
    {
      name: "Divisiones",
      status: "Curado",
      imagen: "ni ni-atom",
      curated_by: "Labandera",
      views: "1234",
      learning_points: "3",
    },
    {
      name: "Multiplicaciones",
      status: "Pendiente",
      imagen: "ni ni-diamond",
      curated_by: "-----",
      views: "0",
      learning_points: "3",
    },
    {
      name: "Dinamica",
      status: "Curado",
      imagen: "ni ni-books",
      curated_by: "Yenni",
      views: "420",
      learning_points: "3",
    },
    {
      name: "Estatica",
      status: "Curado",
      imagen: "ni ni-user-run",
      curated_by: "JoseMaria",
      views: "69",
      learning_points: "3",
    },
  ];


}
