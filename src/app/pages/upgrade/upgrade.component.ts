import { Component, OnInit } from '@angular/core';
import { UpgradeServices } from "src/app/core/services/upgrade";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
  private uploadFile;

  constructor(private upgradeServices: UpgradeServices) { }

  ngOnInit() {
  }

  fileChange(file){
    this.uploadFile = file.target.files[0];
    console.log("These are the files uploaded: ",this.uploadFile);
  }

  sendFile(){
    const formData = new FormData();
    formData.append("file",this.uploadFile);

    this.upgradeServices.sendUpgradeFile(formData).subscribe(
      response => {
        console.log(response);
      } , error => {
        console.log(error);
      }
    )
  }
}
