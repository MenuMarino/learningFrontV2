import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import Swal from 'sweetalert2';
import { Router } from "@angular/router";


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  providers: []
})
export class FilesComponent implements OnInit {

  private currentFile : any = null;

  constructor() { }

  ngOnInit(): void {
     
  }

  downloadMaterial() {

  }

  chooseFile(file) {
    if(this.currentFile !=null){
      this.currentFile.backgroundcolor = '#f6f9fc';
    }
    console.log(file);
    this.currentFile = file;
    file.backgroundcolor = '#bddbfa';
  }



  public archivos: any[] = [
    {
      name: "JSJSJ.pdf",
      peso: 123,
      ruta: '/assets/pdfs/pdf1.pdf',
      backgroundcolor : '#f6f9fc'
    },
    {
      name: "JS.pdf",
      peso: 123,
      ruta: '/assets/pdfs/pdf2.pdf',
      backgroundcolor : '#f6f9fc'
    },
    {
      name: "ll.pdf",
      peso: 123, 
      ruta: '/assets/pdfs/pdf3.pdf',
      backgroundcolor : '#f6f9fc'
    }
  ]
}
