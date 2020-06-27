import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';

@Component({
  selector: 'app-mymaterials',
  templateUrl: './mymaterials.component.html',
  styleUrls: ['./mymaterials.component.css'],
  providers: [StorageService]
})
export class MyMaterialsComponent implements OnInit {
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
      type: "youtube",
      professor: "Bellido",
      learning_points: "3",
    },
    {
        name: "Polinomios",
        type: "youtube",
        professor: "Bellido",
        learning_points: "3",
      },
      {
        name: "Polinomios",
        type: "youtube",
        professor: "Bellido",
        learning_points: "3",
      },
      {
        name: "Polinomios",
        type: "youtube",
        professor: "Bellido",
        learning_points: "3",
      },
      {
        name: "Polinomios",
        type: "youtube",
        professor: "Bellido",
        learning_points: "3",
      }
  ];


}
