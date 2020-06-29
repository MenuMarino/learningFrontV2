import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-all_temas',
  templateUrl: './all_temas.component.html',
  styleUrls: ['./all_temas.component.css']
})
export class AllTemasComponent implements OnInit {

    public copy: string;
    constructor(private router: Router,) { }
  
    ngOnInit() {
      
    }

    chooseTheme(curso){
        this.router.navigateByUrl("/temas");
    }

    public cursos: any[] = [
      {
        name: "Angulos",
        imagen: "ni ni-ruler-pencil"
      },
      {
        name: "Triangulos",
        imagen: "ni ni-atom"
      },
      {
        name: "Rectangulos",
        imagen: "ni ni-diamond"
      },
      {
        name: "Poliedros",
        imagen: "ni ni-books"
      },
      {
        name: "Tetraedro",
        imagen: "ni ni-user-run"
      },
    ]
}