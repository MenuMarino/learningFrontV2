import { Component, OnInit } from '@angular/core';
import { AllFilesService } from "src/app/core/services/files-service";

import { StorageService } from 'src/app/core/services/storage-service';



@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  providers: [StorageService,AllFilesService]
})
export class FilesComponent implements OnInit {

  private currentFile : any = null;
  public listFiles : File[] = [];

  constructor(
    private storageService: StorageService,
    private filesService : AllFilesService
  ) { }


  ngOnInit(): void {
    this.filesService.getAllFiles(
      Number(this.storageService.getTempFile_Courses())
    ).subscribe(
      response =>{
        console.log(response);
        for (let val in response){
          console.log(response[val]);
          this.listFiles.push( new File(
            response[val].name,
            response[val].type,
            response[val].link,
            response[val].material_from.who_posted.id,
            )
          )
        }
        console.log(this.listFiles);
      }, error => {
        console.log(error);
      }
    )
    
  }

  downloadMaterial() {

  }

  fileType() {
    if(this.currentFile.type == "PDF") {
      return true;
    }
    return false;
  }

  typeVideo() {
    if(this.currentFile.type == "YOUTUBE_LINK") {
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

  
}

export class File{
  public name : string;
  public type : string;
  public ruta : string;

  constructor(name, type, ruta, id_user){
    
    if(type!='YOUTUBE_LINK'){
      this.ruta = "localhost:8081/"+id_user+"/materiales/"+ruta;
    }
    else{
      this.ruta = ruta;
    }
    this.name = name;
    this.type = type;

  }

};

