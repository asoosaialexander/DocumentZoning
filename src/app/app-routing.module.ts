import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { HomeComponent } from './home/home.component';
import { DocumentDataEntryComponent } from './document-data-entry/document-data-entry.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: DocumentUploadComponent },
  { path: 'dataentry', component: DocumentDataEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
