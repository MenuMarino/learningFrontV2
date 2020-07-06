import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // Valores para prueba
  public contador = 0;
  public Titulo = "Ángulos";
  public Curso = "Matemática";
  public Tema = "Ángulos";
  // Valores necesarios
  public box1 = false;
  public box2 = false;
  public box3 = false;
  public box4 = false;
  public box5 = false;
  public yt1 = false;
  public yt2 = false;
  public yt3 = false;
  public yt4 = false;
  public yt5 = false;
  public p1 = false;
  public p2 = false;
  public p3 = false;
  public p4 = false;
  public p5 = false;
  public descripcion = "";
  private uploadedFiles : any = [];

  constructor() { }

  ngOnInit(): void {
  }
  aumentar(file) {
    let newfile = file.target.files[0];
    this.contador += 1;
    this.uploadedFiles.push(newfile);
  }
 
  rise() {
    this.contador += 1;
  }


  
  select1() {
    return this.box1;
  }
  change1() {
    this.box1 = !this.box1;
    this.p1 = !this.p1;
  }
  change1_2() {
    this.box1 = !this.box1;
    this.yt1 = !this.yt1;
  }
  select1_2() {
    return this.box1 && this.yt1;
  }
  ss1() {
    return this.box1 && this.p1;
  }



  select2() {
    return this.box2;
  }
  select2_2() {
    return this.box2 && this.yt2;
  }
  change2() {
    this.box2 = !this.box2;
    this.p2 = !this.p2;
  }
  change2_2() {
    this.box2 = !this.box2;
    this.yt2 = !this.yt2;
  }
  ss2() {
    return this.box2 && this.p2;
  }



  select3() {
    return this.box3;
  }
  select3_2() {
    return this.box3 && this.yt3;
  }
  change3() {
    this.box3 = !this.box3;
    this.p3 = !this.p3;
  }
  change3_2() {
    this.box3 = !this.box3;
    this.yt3 = !this.yt3;
  }
  ss3() {
    return this.box3 && this.p3;
  }



  select4() {
    return this.box4;
  }
  select4_2() {
    return this.box4 && this.yt4;
  }
  change4() {
    this.box4 = !this.box4;
    this.p4 = !this.p4;
  }
  change4_2() {
    this.box4 = !this.box4;
    this.yt4 = !this.yt4;
  }
  ss4() {
    return this.box4 && this.p4;
  }



  select5() {
    return this.box5;
  }
  select5_2() {
    return this.box5 && this.yt5;
  }
  change5() {
    this.box5 = !this.box5;
    this.p5 = !this.p5;
  }
  change5_2() {
    this.box5 = !this.box5;
    this.yt5 = !this.yt5;
  }
  ss5() {
    return this.box5 && this.p5;
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
