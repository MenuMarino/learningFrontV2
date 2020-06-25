import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { RegisterObj } from 'src/app/core/models/registerObj';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [StorageService]
})
export class UserProfileComponent implements OnInit {
  private identity: any;
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
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.registerObj = new RegisterObj();
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    this.birth = this.identity.birth;
    this.email = this.identity.email;
    this.lastname = this.identity.lastname;
    console.log("THIS IS THE IDENTITY: ", this.identity.name);
    this.nombre = this.identity.name;
    this.role = this.identity.role;
    this.username = this.identity.username;
    this.current_styles = {
      'min-height': '600px',
      'background-image': this.getUrl(),
      'background-size': 'cover',
      'background-position': 'center top',
    }
  }

  getUrl(){
    switch (this.role) {
      case 'TEACHER':
        return 'url(/assets/img/theme/professor_cover.jpg)';
      case 'STUDENT':
        return 'url(/assets/img/theme/student_cover.jpg)';
      
    }
  }

  updateUserName(){
    console.log("USERNAME: ",this.registerObj.username);


  }

  updateEmail(){

  }


}
