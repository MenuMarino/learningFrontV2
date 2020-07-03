import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  constructor() { }

  ngOnInit(): void {
     
  }

  downloadMaterial() {

  }

  fileType() {
    if (this.currentFile.type == "pdf") {
      return true;
    } else {
      return false;
    }
  }

  typeVideo() {
    if(this.currentFile.vd == "yt") {
      return true;
    } else {
      return false;
    }
  }

  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }

  chooseFile(file) {
    if(this.currentFile !=null){
      this.currentFile.backgroundcolor = '#f6f9fc';
    }
    console.log(file);
    this.currentFile = file;
    file.backgroundcolor = '#bddbfa';
  }

// path anhadido en cache, no es necesario request

  public archivos: any[] = [
    {
      name: "Pdf viewer",
      vd: "",
      type: "pdf",
      peso: 123,
      ruta: '/assets/pdfs/pdf1.pdf',
      backgroundcolor : '#f6f9fc'
    },
    {
      name: "Video viewer",
      vd: "mp4",
      type: "video",
      peso: 123,
      ruta: '/assets/pdfs/pdf2.pdf',
      backgroundcolor : '#f6f9fc'
    },
    {
      name: "Youtube Link",
      vd: "yt",
      type: "video",
      peso: 123, 
      ruta: 'bWp5Oxhh5VA',
      backgroundcolor : '#f6f9fc'
    }
  ]
}

