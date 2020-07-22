import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CoursesComponent } from "../../pages/courses/courses.component";
import { MyMaterialsComponent } from "../../pages/mymaterials/mymaterials.component";
import { TemasComponent } from "../../pages/temas/temas.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FilesComponent } from "../../pages/files/files.component";
import { AllTemasComponent } from "../../pages/all_temas/all_temas.component";
import { PostulantCurator } from "../../pages/postulant_curator/postulant_curator.component";
import { AllTcuratorsComponent} from "../../pages/all_tcurators/all_tcurators.component";


//import { UploadComponent} from "../../pages/upload/upload.component";
//import {} from "../../pages/materials/materials.component";
//import {AdminComponent} from "../../pages/admin/admin.component";
// import { ToastrModule } from 'ngx-toastr';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    UpgradeComponent,
    CoursesComponent,
    MyMaterialsComponent,
    TemasComponent,
    FilesComponent,
    AllTemasComponent,
    PostulantCurator,
    CurarComponent,
    AllTcuratorsComponent,
    //UploadComponent,
  ],
})
export class AdminLayoutModule {}
