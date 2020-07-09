import { Component, OnInit } from '@angular/core';
import { AllFilesService } from "src/app/core/services/files-service";
import { MaterialServices } from "src/app/core/services/material-service";

import * as moment from 'moment';
import { DOCUMENT } from '@angular/common'; 
import { StorageService } from 'src/app/core/services/storage-service';
import { Inject }  from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  providers: [StorageService,AllFilesService,MaterialServices]
})
export class FilesComponent implements OnInit {

  private currentFile : any = null;
  public listFiles : File[] = [];
  public identity : any;
  public currentPoints : string;
  public idFile : Number;
  public idUser : Number;
  public isCurator : boolean;
  public isOwner : boolean;

  constructor(
    public sanitizer: DomSanitizer,
    private storageService: StorageService,
    private filesService : AllFilesService,
    private materialService : MaterialServices,
    @Inject(DOCUMENT) document
  ) { }



  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());  
    
    this.filesService.getAllFiles(
      Number(this.storageService.getTempFile_Courses())
    ).subscribe(
      response =>{
        console.log(this.identity);
        if(this.identity.id == response.whoPosted.id){
          this.isOwner = true;
        }
        else{this.isOwner = false;}
        if(this.identity.role == "CURATOR"){
          this.isCurator = true;
        }
        else{
          this.isCurator = false;
        }
        for (let val in response.files){
          this.listFiles.push( new File(
            response.files[val].name,
            response.files[val].type,
            response.files[val].link,
            response.whoPosted.id,
            )
          )   
        }

        this.idUser = response.whoPosted.id;

        this.idFile = response.id;
        this.currentPoints = ((response.learningPoints/response.ratingPeople).toFixed(2)).toString()+"/5";
      }, error => {

      }
    )

    this.filesService.getRateUser(
      this.identity.id,
      Number(this.storageService.getTempFile_Courses())
    ).subscribe(
      response =>{
        if(response){
          
          document.getElementById("star"+response.toString()).click();;
        }
      }
    )

  }

  AceptarCurar(){
    this.materialService.curarMaterial(
      this.identity.id,
      this.idFile,
    ).subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    )
  }

  NegarCurar(){
    this.materialService.
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
//https://www.youtube.com/embed/cpbeS15sHZ0
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

    }
    else{
      this.ruta = ruta;
    }
    this.name = name;
    this.type = type;
  }
};

