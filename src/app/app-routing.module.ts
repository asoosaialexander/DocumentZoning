import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalFormComponent } from './document-forms/medical-form/medical-form.component';
import { NonMedicalFormComponent } from './document-forms/non-medical-form/non-medical-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'med', component: MedicalFormComponent },
  { path: '', component: HomeComponent },
  { path: 'non-med', component: NonMedicalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
