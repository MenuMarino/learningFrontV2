import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';

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
  public name: string;
  public role: string;
  public username: string;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    console.log(this.identity);
    this.birth = this.identity.birth;
    this.email = this.identity.email;
    this.lastname = this.identity.lastname;
    this.name = this.identity.name;
    this.role = this.identity.role;
    this.username = this.identity.username;
    

  }


}
