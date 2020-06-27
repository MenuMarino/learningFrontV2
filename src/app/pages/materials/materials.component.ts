import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
  providers: [StorageService]
})
export class MaterialsComponent implements OnInit {
  private identity: any;
  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    console.log("estamos en materials");
    console.log(this.identity.username);
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
