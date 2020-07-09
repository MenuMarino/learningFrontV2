import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CoursesComponent } from "../../pages/courses/courses.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { UploadComponent } from "../../pages/upload/upload.component";
import { MaterialsComponent } from "../../pages/materials/materials.component";
import { AdminComponent } from "../../pages/admin/admin.component";
import { MyMaterialsComponent } from "../../pages/mymaterials/mymaterials.component";
import { TemasComponent } from "../../pages/temas/temas.component";
import { FilesComponent } from "../../pages/files/files.component";
import { PostulantCurator } from "../../pages/postulant_curator/postulant_curator.component";
import { AllTemasComponent } from "../../pages/all_temas/all_temas.component";
import { CurarComponent } from "../../pages/curar/curar.component";
import { AllTcuratorsComponent} from "../../pages/all_tcurators/all_tcurators.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "courses", component: CoursesComponent },
  {path: "upload",component:UploadComponent},
  {path: "materials", component:MaterialsComponent},
  {path: "mymaterials", component:MyMaterialsComponent},
  {path: "admin",component:AdminComponent}, 
  {path: "temas",component:TemasComponent},
  {path: "files",component:FilesComponent},
  {path: "all_temas",component:AllTemasComponent},
  {path: "postulant_curator", component:PostulantCurator},
  {path: "all_tcurators", component:AllTcuratorsComponent},
  {path: "curar", component:CurarComponent}
];
