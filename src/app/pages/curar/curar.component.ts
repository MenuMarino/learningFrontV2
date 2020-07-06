import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';
import { Router } from "@angular/router";

// subir video de youtube, otra casilla
//  cambio de vista en material, para no ir hacia la subruta upload

@Component({
  selector: 'app-curar',
  templateUrl: './curar.component.html',
  styleUrls: ['./curar.component.css'],
  providers: [BrowserModule]
})

export class CurarComponent implements OnInit {
  public currentperson : any = null;

  choosepersona(postulant) {
    this.currentperson = postulant;
  }

  constructor() {

  }
    
  ngOnInit() {
    console.log("hello there");
  }

  acept() {

  }

  reject() {

  }

  public personas: any[] = [
    {
      name: "Jose",
      cv: 'http://localhost:8081/uploads/download/1/materiales/Guia_Laboratorio_11_2.pdf'
    },
    {
      name: "Jesus",
      cv: 'http://localhost:8081/uploads/download/1/materiales/Guia_Laboratorio_11_2.pdf'
    },
    {
      name: "Maria",
      cv: 'http://localhost:8081/uploads/download/1/materiales/Guia_Laboratorio_11_2.pdf'
    }
  ]
}