import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { RegisterObj } from 'src/app/core/models/registerObj';
import { UpdateService } from 'src/app/core/services/update';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [StorageService]
})
export class UserProfileComponent implements OnInit {
  private identity: any;
  public id: string;
  public birth: string;
  public email: string;
  public lastname: string;
  public nombre: string;
  public role: string;
  public username: string;
  public url_cover: string; 
  public current_styles: any;
  public registerObj: RegisterObj

  
  constructor(
    private storageService: StorageService,
    private updateService: UpdateService
  ) { }

  ngOnInit() {
    this.registerObj = new RegisterObj();
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    this.birth = this.identity.birth;
    this.email = this.identity.email;
    this.lastname = this.identity.lastname;
    console.log("THIS IS THE IDENTITY: ", this.identity.name);
    this.nombre = this.identity.name;
    this.id = this.identity.id;
    this.role = this.identity.role;
    this.username = this.identity.username;
    this.current_styles = {
      'min-height': '500px',
      'background-image': this.getUrl(),
      'background-size': 'cover',
      'background-position': 'center top',
    }
  }


  getUrl(){
    switch (this.role) {
      case 'TEACHER':
      case 'CWAITING':
        return 'url(/assets/img/theme/professor_cover.jpg)';
      case 'STUDENT':
      case 'TWAITING':
        return 'url(/assets/img/theme/student_cover.jpg)';
      case 'CURATOR':
        return 'url(/assets/img/theme/curator_cover.png)';
      case 'ADMIN':
        return 'url(/assets/img/theme/admin_cover.jpg)';
    }
  }
  
  updateUserName(){
    //   console.log("The username: ", this.registerObj.username);
    if(this.registerObj.username == this.identity.username){
      Swal.fire({
        allowOutsideClick: false,
        text: 'Elige un nombre de usuario distinto al actual',
        icon: 'error',
      });
    } else {
      this.updateService.updateUsername(this.id, this.registerObj.username).subscribe(
        response => {
            Swal.fire({
              allowOutsideClick: false,
              text: 'Nombre de usuario actualizado',
              icon: 'success',
            });
            console.log(response);
        }, error => {
            Swal.fire({
              allowOutsideClick: false,
              text: 'El nombre de usuario ya existe',
              icon: 'error',
            });
            console.log(error);
        }
      )
    }

  }

  updateEmail(){
    // console.log("The email: ", this.registerObj.email);
    if(this.registerObj.email == this.identity.email){
      Swal.fire({
        allowOutsideClick: false,
        text: 'Elige un email distinto al actual',
        icon: 'error',
      });
    } else {
      this.updateService.updateEmail(this.id, this.registerObj.email).subscribe(
        response => {
            Swal.fire({
              allowOutsideClick: false,
              text: 'Correo actualizado',
              icon: 'success',
            });
          console.log(response);
        }, error => {
            Swal.fire({
              allowOutsideClick: false,
              text: 'El correo ya existe',
              icon: 'error',
            });
          console.log(error);
        }
      )
    }
  }


}