import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginObj } from "src/app/core/models/loginObj";
import { LoginService } from "src/app/core/services/login";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { StorageService } from "src/app/core/services/storage-service";
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginObj, StorageService],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginObj: LoginObj;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService
    ) {
    this.loginObj = new LoginObj();
  }

  ngOnInit() {
    this.storageService.setComingFromLogin("yes");
  }

  ngOnDestroy() {}

  logIn(loginForm: NgForm) {
    this.loginObj.password=CryptoJS.SHA256(this.loginObj.password ).toString(CryptoJS.enc.Hex);
    console.log(this.loginObj);
    this.loginService
    .logIn(
      this.loginObj.username,
      this.loginObj.password
      )
    .subscribe(
      response => {
        if(!response.username){
          Swal.fire({
            allowOutsideClick: false,
            text: 'El usuario no está registrado',
            icon: 'error',
          });
          loginForm.resetForm();
          return;
        } else {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            showConfirmButton: false,
            timer: 1500
          })
          const identity = {
            name: response.name,
            lastname: response.lastname,
            email: response.email,
            username: response.username,
            grade: response.grade,
            age: response.age,
            role: response.type
          }
          this.storageService.setIdentityLocalStorage(JSON.stringify(identity));
          this.router.navigateByUrl("/courses");
        }          
      }, error => {
        console.log(error);
          Swal.fire({
            allowOutsideClick: false,
            text: 'Hubo un error en el login',
            icon: 'error',
          });
          loginForm.resetForm();
          return;
      }
    )
  }

  goReg() {
    this.router.navigateByUrl("/register");
  }
}
