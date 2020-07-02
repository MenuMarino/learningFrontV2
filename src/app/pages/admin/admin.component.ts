import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private currentFile : any = null;

  constructor() { }

  ngOnInit(): void {
     
  }

  
  AceptarCurator(){

  }

  DenegarCurator(){

  }

  public Postulante: any = 
    {
      name: "Chicho",
      fecha: '04/20',
      colegio: 'UTEC',
      especialidad: 'Fisica',
      materiales: '420'
    }
  
}