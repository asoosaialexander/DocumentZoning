import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalFormComponent } from './document-forms/medical-form/medical-form.component';
import { NonMedicalFormComponent } from './document-forms/non-medical-form/non-medical-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentDataEntryComponent } from './document-data-entry/document-data-entry.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalFormComponent,
    NonMedicalFormComponent,
    HomeComponent,
    NavbarComponent,
    DocumentDataEntryComponent,
    DocumentUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
