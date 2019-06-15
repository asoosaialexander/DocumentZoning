import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { GeneratePdfService } from 'src/app/shared/generate-pdf.service';


@Component({
  selector: 'app-non-medical-form',
  templateUrl: './non-medical-form.component.html',
  styleUrls: ['./non-medical-form.component.css']
})
export class NonMedicalFormComponent implements OnInit {

  nonMedForm = new FormGroup({
    applicationNumber: new FormControl('', Validators.required),
    uin: new FormControl('', Validators.required),
    gender: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    // email: new FormControl(''),
    village: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    // addressType: new FormControl(''),
    proposalType: new FormControl('')
  });

  constructor(private generatePdfService: GeneratePdfService) {
  }

  ngOnInit() {
  }

  onFocus(field: string) {
    console.log(`${field} is focused`);
    this.generatePdfService.generatePdf("bajaj_alliance_non_medical.pdf", field, 'non-medical');
  }
}
