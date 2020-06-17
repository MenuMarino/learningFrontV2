import { Component, OnInit} from "@angular/core";
import { RegisterObj } from "src/app/core/models/registerObj";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable, of }from 'rxjs';
import { RegisterServices } from "src/app/core/services/register";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { StorageService } from "src/app/core/services/storage-service";
import Swal from 'sweetalert2';

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
    this.registerObj.type = "Student";
    if(this.isTeacher){
      this.registerObj.type = "Teacher";
    }
    this.registerServices
      .sendRegisterData(
        this.registerObj.name,
        this.registerObj.lastname,
        this.registerObj.sex,
        this.registerObj.email,
        this.registerObj.username,
        this.registerObj.birth,
        this.registerObj.country,
        this.registerObj.password,
        this.registerObj.grade,
        this.registerObj.type
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
            name: this.registerObj.name,
            lastname: this.registerObj.lastname,
            email: this.registerObj.email,
            username: this.registerObj.username,
            role: this.registerObj.type,
            grade: this.registerObj.grade,
            birth: this.registerObj.birth
          }

          if(this.isTeacher){
            delete identity.grade;
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
