import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CoursesComponent } from "../../pages/courses/courses.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { UploadComponent } from "../../pages/upload/upload.component";
import { MaterialsComponent } from "../../pages/materials/materials.component";
import { AdminComponent } from "../../pages/admin/admin.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "courses", component: CoursesComponent },
  {path: "upload",component:UploadComponent},
  {path: "materials", component:MaterialsComponent},
  {path: "admin",component:AdminComponent}, 
];
