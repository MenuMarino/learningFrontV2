import { Component, OnInit } from '@angular/core';



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
  public 


  constructor() { }


  ngOnInit(): void {
    
  }

  downloadMaterial() {

  }

  fileType() {
    if(this.currentFile.type == "pdf") {
      return true;
    }
    return false;
  }

  typeVideo() {
    if(this.currentFile.type == "yt") {
      return true;
    }
    return false;
  }
  
  chooseFile(file) {
    if(this.currentFile !=null){
      this.currentFile.backgroundcolor = '#f6f9fc';
    }
    this.currentFile = file;
    file.backgroundcolor = '#bddbfa';
  }

  public archivos: any[] = [
    {
      name: "JSJSJ",
      type: "pdf",
      peso: 123,
      ruta: '/assets/pdfs/pdf1.pdf',
      
      backgroundcolor : '#f6f9fc'
    },
    {
      name: "JS",
      type: "yt",
      peso: 123,
      ruta: '/assets/pdfs/pdf2.pdf',
      backgroundcolor : '#f6f9fc'
    },
    {
      name: "ll",
      type: "mp4",
      peso: 123, 
      ruta: '/assets/pdfs/pdf3.pdf',
      backgroundcolor : '#f6f9fc'
    }
  ]
}
