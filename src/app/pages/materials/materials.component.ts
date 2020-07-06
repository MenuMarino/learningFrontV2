import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { MaterialServices } from 'src/app/core/services/material-service';
import { FilterPipe } from 'ngx-filter-pipe';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
  providers: [StorageService, MaterialServices ]
})
// materiales esta en local storage
export class MaterialsComponent implements OnInit {
  private identity: any;
  private myMaterials : SingleMaterial[] = [];
  private Grades : string[] = ['1er grado','2do grado','3er grado','4to grado','5to grado'];
  private currentTema : any;
  public curar_button : boolean = true;
  public temporal_resolve : any;
  public  tempora_theme : any;


  
  constructor(
    private storageService: StorageService,
    private filterPipe: FilterPipe,
    private router: Router,
    private materialService: MaterialServices,

  ) {  }


  mostrar_datos(results){
    console.log(results);
    results = results.value;
    this.temporal_resolve = results;
    console.log(results[0],results[1],results[2]);
    this.materialService.sendTemasdata(
      this.storageService.getCoursesLocalStorage()[results[2]],
      Number(results[3])+1
    ).subscribe(
      async response =>{
        this.currentTema = response; 
        console.log();
        const { value: Material } = await Swal.fire({
          title: 'Selecciona uno de los cursos',
          input: 'select',
          inputOptions: this.currentTema,
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value != null) {
                console.log(value)
                resolve()
              } else {
                resolve('Necesita elegir uno de los temas ')
              }
            })
          }
        })
        if (Material) {
          let valor = `${Material}`;
          console.log(this.currentTema);
          console.log("est es el material : ");
          console.log(this.identity.id + " "+ this.temporal_resolve[0] + " " + this.storageService.getCoursesLocalStorage()[results[2]] + " "+ (Number(this.temporal_resolve[3])+1) + " ");
          this.materialService.createMaterial(
            this.identity.id,
            this.temporal_resolve[0],
            this.temporal_resolve[1],
            this.storageService.getCoursesLocalStorage()[results[2]],
            (Number(this.temporal_resolve[3])+1),
            this.currentTema[Number(valor)],
          ).subscribe(
            response =>{
              Swal.fire(`Creaste un material exitosamente`);
              console.log(response);
              const identity = {
                id: response.id,
                name: response.name,
                lastname: response.lastname,
                email: response.email,
                username: response.username,
                role: response.type,
                grade: response.grade,
                birth: moment(response.birth).format('DD/MM/YYYY'),
                institucion: response.institucion,
                especialidad: response.especialidad,
                myMaterials: response.myMaterials,
                favouriteMaterials: response.favouriteMaterials,
              }
              this.storageService.setIdentityLocalStorage(JSON.stringify(identity));
              this.router.navigateByUrl("/upload");
            },
            (error) => {
              Swal.fire(`Error al crear el material`);
            }
          )
        
        }
     
      }

    )
    
  }
 
  MandarCurar(currentMaterial){
    Swal.fire({
      title: 'Usted enviara a curar el material',
      text: "No podra modificarlo en el proceso de curado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviarlo'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Su material esta',
          'en cola de curacion',
          'success'
        )
        this.curar_button = false;

      }
    })
    console.log(currentMaterial);
  }

  MandarEliminar(currentMaterial){
    Swal.fire({
      title: '¿Esta seguro de eliminar el material?',
      text: "Esta accion es permanente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'Tu materia ha sido eliminado.',
          'success'
        )
      }
    })
    console.log(currentMaterial);

  }


  ActualizarMaterial(currentMaterial){
    this.router.navigateByUrl("/upload");
    console.log(currentMaterial);

  }

  IrMaterial(currentMaterial){
    this.router.navigateByUrl("/files");
    console.log(currentMaterial);

  }

  async CreateMaterial(){

     Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3','4']

    }).queue([
      {
        title: 'Nuevo Material',
        text: 'Escriba el titulo del material.'
      },
      {
        title: 'Descripcion Material',
        text: 'Escriba una descripcion del material.'
      },
      {
        title: 'Curso',
        input : 'select',
        inputOptions : this.storageService.getCoursesLocalStorage(), 
      },
      {
        title: 'Grado',
        input: 'select',
        inputOptions : this.Grades,
      }
    ]).then((result) => {
      if (result) {
        console.log(result);
        this.mostrar_datos(result);
      }
      else{
        Swal.fire({
          title: 'No creado Satisfactoriamente',
          confirmButtonText: 'Ir al material!',
          
        })
      }
    })
  }


  public userFilter: any = {
    name: "",
  };

  ngOnInit(): void {
   
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    console.log(this.identity);
    for (let val of this.identity.myMaterials){
      console.log(val);
      this.myMaterials.push(
        new SingleMaterial(
          val.name,
          this.ifAproved(val.who_aproved),
          this.whoAproved(val.who_aproved),
          val.visits,
          this.getLearningPoints(val.learning_points,val.ratingPeople),
          val.ratingPeople
          )
      );
      
      console.log(this.storageService.getCoursesLocalStorage());
      console.log(this.storageService.getGradesLocalStorage());
      console.log(this.identity);
    }
    
    console.log("estamos en materials");
    
  }
  ifAproved(who_aproved){
    if(who_aproved == null){
      return "Pendiente";
    }
    return "Curado";
  }
  whoAproved(who_aproved){
    if(who_aproved == null){
      return "------";
    }
    return who_aproved.username;
  }
  getLearningPoints(learning_points,ratingPeople){
    if(learning_points == null){
      return "0";
    }
    else{
      return learning_points/ratingPeople;
    }
  }
}

export class SingleMaterial {

  public name : string;
  public status : string;
  public curated_by : string;
  public views : string;
  public learning_points : string;
  public porcentaje_LP : string;
  public temporal : number;
  public color_curated : string;
  public color_bar : string;
  public ratingPeople : number;

  constructor(name,status,curated_by,views,learning_points,ratingPeople){
    this.name = name;
    this.status = status;
    this.curated_by = curated_by;
    this.views = views;
    this.learning_points = learning_points;
    this.temporal = learning_points;
    this.porcentaje_LP = this.temporal.toString() + '%';
    this.color_curated = this.getColorCurated(status);
    this.color_bar = this.getColorBar(this.temporal);
    this.ratingPeople = ratingPeople;
    console.log(this.temporal);
  }
  getColorBar(temporal){
    if(temporal>=0 && temporal <50){
      return "progress-bar bg-danger";
    }
    else if(temporal>=50 && temporal<=100){
      return "progress-bar bg-success";
    }
  }

  getColorCurated(status){
    if(status == "Pendiente"){
      return "badge badge-pill badge-danger";
    }
    return "badge badge-pill badge-success";
  }  
};