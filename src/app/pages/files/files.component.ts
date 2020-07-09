import { Component, OnInit } from '@angular/core';
import { AllFilesService } from "src/app/core/services/files-service";
import * as moment from 'moment';

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
  public identity : any;
  public currentPoints : string = "3.5/5";
  public idFile : Number;

  constructor(
    private storageService: StorageService,
    private filesService : AllFilesService
  ) { }



  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    this.filesService.getAllFiles(
      Number(this.storageService.getTempFile_Courses())
    ).subscribe(
      response =>{
        console.log("ACA ES:")
        console.log(response);
        for (let val in response.files){
          console.log(response.files[val]);
          this.listFiles.push( new File(
            response.files[val].name,
            response.files[val].type,
            response.files[val].link,
            response.whoPosted.id,
            )
          )
        }
        console.log("ESTE ES EL MATERIAL");
        console.log(response);
        this.idFile = response.id;
        this.currentPoints = ((response.learningPoints/response.ratingPeople).toFixed(2)).toString()+"/5";
      }, error => {
        console.log(error);
      }
    )

    

  }

  downloadMaterial() {

  }

  addToFavorites() {
    this.filesService.sendToFavorite(
      JSON.parse(this.storageService.getIdentityLocalStorage()).id,
      this.storageService.getTempFile_Courses(),
    ).subscribe(
      response=>{
        const identity = {
          id: this.identity.id,
          name: this.identity.name,
          lastname: this.identity.lastname,
          email: this.identity.email,
          username: this.identity.username,
          role: this.identity.type,
          grade: this.identity.grade,
          birth: moment(this.identity.birth).format('DD/MM/YYYY'),
          institucion: this.identity.institucion,
          especialidad: this.identity.especialidad,
          myMaterials: this.identity.myMaterials,
          favouriteMaterials: response.favouriteMaterials,
        }
        this.storageService.setIdentityLocalStorage(JSON.stringify(identity));
        console.log(identity.favouriteMaterials);
      }
    )
  }

  fileType() {
    if(this.currentFile.type == "PDF") {
      return true;
    }
    return false;
  }

  clickStar(data){
    console.log(data);
      this.filesService.sendRating(
        this.idFile,
        this.identity.id,
        Number(data)
    ).subscribe(
      response=>{
        this.currentPoints = ((response.learningPoints/response.ratingPeople).toFixed(2)).toString()+"/5";
      }
    )
    
  }

/*material id, learningpoints, user_id, */

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
      this.ruta = 'http://localhost:8081/uploads/download/'+id_user+'/materiales/'+ruta;
      console.log(this.ruta);
    }
    else{
      this.ruta = ruta;
    }
    this.name = name;
    this.type = type;
  }
};

