import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UploadComponent } from './pages/upload/upload.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { AdminComponent } from './pages/admin/admin.component';
<<<<<<< HEAD
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
=======
//import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';
//import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


>>>>>>> 381b3e7d3ca1de8b89d231890efa55ca25061206


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FilterPipeModule,
    BrowserModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    
    
=======
    ReactiveFormsModule
    //NgxExtendedPdfViewerModule
    //PdfViewerModule
>>>>>>> 381b3e7d3ca1de8b89d231890efa55ca25061206
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UploadComponent,
    MaterialsComponent,
    AdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
