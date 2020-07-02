import { Component, OnInit} from "@angular/core";
import { RegisterObj } from "src/app/core/models/registerObj";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable, of }from 'rxjs';
import { RegisterServices } from "src/app/core/services/register";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { StorageService } from "src/app/core/services/storage-service";
import Swal from 'sweetalert2';
import * as moment from "moment";
import CryptoJS from 'crypto-js';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [RegisterObj, StorageService],
})
export class RegisterComponent implements OnInit {
  public registerObj: RegisterObj;


  public gender: any[] = [
    {id:"true", Val: "Masculino"},
    {id:"false", Val: "Femenino"}
  ]

  public grade: any[] = [
    {year:2, val: "Segundo"},
    {year:3, val: "Tercero"},
    {year:4, val: "Cuarto"},
    {year:5, val: "Quinto"}
  ]

  private isTeacher: Boolean = false;

  get_dataUser(){
    if(this.isTeacher){
      return "Bienvenido nuevo PROFESORES a Learning Peru, obtendras muchos beneficios si te registras";
    }
    return "Bienvenido nuevo ALUMNOS a Learning Peru, obtendras muchos beneficios si te registras";
  }

  constructor(
    private router: Router,
    private registerServices: RegisterServices,
    private storageService: StorageService
  ) {
    this.registerObj = new RegisterObj();
  }

  ngOnInit() {

  }

  genderChangeHandler(event: any) {
    this.registerObj.sex = event.target.value;
  }

  gradeChangeHandler(event: any){
    this.registerObj.grade = event.target.value;
  }

  regClick(registerForm: NgForm) {
    this.registerObj.type = "STUDENT";
    if(this.isTeacher){
      this.registerObj.type = "TEACHER";
    }
    const passAux=CryptoJS.SHA256(this.registerObj.password ).toString(CryptoJS.enc.Hex);
    this.registerServices
      .sendRegisterData(
        this.registerObj.name,
        this.registerObj.lastname,
        this.registerObj.sex,
        this.registerObj.email,
        this.registerObj.username,
        this.registerObj.birth,
        this.registerObj.country,
        passAux,
        this.registerObj.grade,
        this.registerObj.type,
        this.registerObj.institucion,
        this.registerObj.especialidad
      )
      .subscribe(
        (response) => {
          if(!response){
            Swal.fire({
              allowOutsideClick: false,
              text: 'El usuario ya está registrado',
              icon: 'error',
            });
            registerForm.resetForm();
            return;
          }

          Swal.fire({
            icon: 'success',
            title: '¡Usuario correctamente registrado!',
            showConfirmButton: false,
            timer: 1500
          })

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
            especialidad: response.especialidad
          }

          if(this.isTeacher){
            delete identity.grade;
          } else {
            delete identity.especialidad;
            delete identity.institucion;
          }

          console.log(identity);
         
          this.storageService.setIdentityLocalStorage(JSON.stringify(identity));
          this.router.navigateByUrl("/courses");
        },
        (error) => {
          console.log(error);
          Swal.fire({
            allowOutsideClick: false,
            text: 'Hubo un error con el registro',
            icon: 'error',
          });
          registerForm.resetForm();
          return;          
        }
      );
  }

  changeRole(){
    this.isTeacher = !this.isTeacher;
  }

}
