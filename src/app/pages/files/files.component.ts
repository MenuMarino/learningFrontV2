import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  private currentFile : any = null;

  constructor() { }

  ngOnInit(): void {
     
  }

  downloadMaterial() {

  }

  chooseFile(file) {
    this.currentFile = file;
  }

  public archivos: any[] = [
    {
      name: "JSJSJ.pdf",
      peso: 123,
      ruta: '../../../assets/pdfs/pdf1.pdf'
    },
    {
      name: "JS.pdf",
      peso: 123,
      ruta: '../../../assets/pdfs/pdf2.pdf'
    },
    {
      name: "ll.pdf",
      peso: 123, 
      ruta: '../../../assets/pdfs/pdf3.pdf'
    }
  ]
}