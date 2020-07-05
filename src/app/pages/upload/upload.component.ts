import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public contador = 0;

  public Titulo = "Ángulos";
  public Curso = "Matemática";
  public Tema = "Ángulos";

  aumentar(file) {
    this.contador += 1;
    console.log(this.contador);
  }

  secondDiv() {
    if(this.contador >=1) {
      return true;
    } 
    return false;
  }

  thirdDiv() {
    if(this.contador >=2) {
      return true;
    } 
    return false;
  }

  fouthDiv() {
    if(this.contador >=3) {
      return true;
    } 
    return false;
  }

  fifthDiv() {
    if(this.contador >=4) {
      return true;
    } 
    return false;
  }
}
