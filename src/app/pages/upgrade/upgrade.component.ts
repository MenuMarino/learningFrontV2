import { Component, OnInit } from '@angular/core';
import { UpgradeServices } from "src/app/core/services/upgrade";

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
    this.uploadFile = file.target.files;
    console.log("These are the files uploaded: ",this.uploadFile);
  }

  sendFile(){
    this.upgradeServices.sendUpgradeFile(this.uploadFile).subscribe(
      response => {
        console.log(response);
      } , error => {
        console.log(error);
      }
    )
  }
}
