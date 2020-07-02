import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StorageService]
  
})
export class AdminComponent implements OnInit {



  public copy: string;
  constructor(private router: Router,) { }

  ngOnInit() {
    
  }

  postulantcurator(){

    console.log("enviar");
    this.router.navigateByUrl("/postulant_curator");
  }

  public Postulants: any[] = [
    {
      name: "Lucho",
      fecha: "4/20",
      institucion: "Fya",
      
    },
    {
      name: "Carlos",
      fecha: "4/20",
      institucion: "Mareategui",
      
    },
    {
      name: "Jorge",
      fecha: "4/20",
      institucion: "Trilce",
      
    },
    {
      name: "Pepe",
      fecha: "4/20",
      institucion: "Fya",
      
    },
    {
      name: "Carlos",
      fecha: "4/20",
      institucion: "Mareategui",
      
    },
    {
        name: "Juan",
        fecha: "4/20",
        institucion: "Mareategui",
        
      },
      {
        name: "Jose",
        fecha: "4/20",
        institucion: "Fya",
        
      },
      {
        name: "Arturo",
        fecha: "4/20",
        institucion: "Trilce",
        
      },
      {
        name: "Pancho",
        fecha: "4/20",
        institucion: "Trilce",
   
      }
      
  ]
}
