import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { GeneratePdfService } from 'src/app/shared/generate-pdf.service';
import { DocumentDetails } from './../../shared/document-details.model';
import { DocumentService } from '../../shared/document.service';

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

  constructor(private generatePdfService: GeneratePdfService,
    private documentService: DocumentService) {
  }

  ngOnInit() {
  }

  onFocus(field: string) {
    console.log(`${field} is focused`);
    this.generatePdfService.generatePdf("bajaj_alliance_non_medical.pdf", field, 'non-medical');
  }

  submitForm() {
    let exisitngDocuments: DocumentDetails[];
    const data = {
      applicationNumber: this.nonMedForm.controls.applicationNumber.value,
      uin: this.nonMedForm.controls.uin.value,
      gender: this.nonMedForm.controls.gender.value,
      firstname: this.nonMedForm.controls.firstname.value,
      lastname: this.nonMedForm.controls.lastname.value,
      village: this.nonMedForm.controls.village.value,
      state: this.nonMedForm.controls.state.value,
      pincode: this.nonMedForm.controls.pincode.value,
      proposalType: this.nonMedForm.controls.proposalType.value
    };
    this.documentService.getDocument().subscribe(
      (getDocumentResponse) => {
        exisitngDocuments = getDocumentResponse;
        const documentToUpdate = exisitngDocuments.find(s => s.location === "bajaj_alliance_non_medical.pdf");
        if (documentToUpdate) {
          documentToUpdate.data = data;
          this.documentService.updateDocument(exisitngDocuments).subscribe(
            (updateDocumentResponse) => {
              alert('Document Updated Successfully');
            },
            (updateDocumentError) => {
            })
        }
      },
      (getDocumentError) => {
      })
  }

}
