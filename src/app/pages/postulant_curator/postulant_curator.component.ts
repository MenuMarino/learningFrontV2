import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-postulant_curator',
  templateUrl: './postulant_curator.component.html',
  styleUrls: ['./postulant_curator.component.css'],
 
})
export class PostulantCurator implements OnInit {



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







