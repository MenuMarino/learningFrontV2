import { Component, OnInit } from '@angular/core';
import { UpgradeServices } from "src/app/core/services/upgrade";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StorageService } from "src/app/core/services/storage-service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
  providers: [StorageService]
})
export class UpgradeComponent implements OnInit {
  private uploadFile;
  private identity: any;
  public isWaiting: boolean = false;

  constructor(private upgradeServices: UpgradeServices, private storageService: StorageService) { }

  ngOnInit() {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    if(this.identity.waiting === "isWaiting"){
      this.isWaiting = true;
    }
  }

  fileChange(file){
    this.uploadFile = file.target.files[0];
    console.log("These are the files uploaded: ",this.uploadFile);
  }

  sendFile(){
    const formData = new FormData();
    formData.append("file",this.uploadFile);

    this.upgradeServices.sendUpgradeFile(formData, this.identity.id).subscribe(
      response => {
        if(response === true){
          Swal.fire({
            title: 'Subiendo archivo',
          })

          this.identity.waiting = "isWaiting";
          this.storageService.setIdentityLocalStorage(JSON.stringify(this.identity));

          Swal.showLoading();

          setTimeout(() => {
            location.reload();
          },2000);
          
        } else {
          Swal.fire({
            allowOutsideClick: false,
            text: 'Hubo un error al subir el archivo',
            icon: 'error',
          });
        }
        console.log(response);
      } , error => {
        console.log(error);
      }
    )
  }
}
