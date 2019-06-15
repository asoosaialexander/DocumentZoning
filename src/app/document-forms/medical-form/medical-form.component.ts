import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { GeneratePdfService } from 'src/app/shared/generate-pdf.service';
import { DocumentDetails } from './../../shared/document-details.model';
import { DocumentService } from '../../shared/document.service';


@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.css']
})
export class MedicalFormComponent implements OnInit {

  medForm = new FormGroup({
    applicationNumber: new FormControl('', Validators.required),
    uin: new FormControl('', Validators.required),
    gender: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    village: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    addressType: new FormControl(''),
    proposalType: new FormControl('')
  });

  constructor(private generatePdfService: GeneratePdfService,
    private documentService: DocumentService) {
  }

  ngOnInit() {
  }

  onFocus(field: string) {
    console.log(`${field} is focused`);
    this.generatePdfService.generatePdf("bajaj_alliance_medical.pdf", field, 'medical');
  }

  submitForm() {
    let exisitngDocuments: DocumentDetails[];
    const data = {
      applicationNumber: this.medForm.controls.applicationNumber.value,
      uin: this.medForm.controls.uin.value,
      gender: this.medForm.controls.gender.value,
      firstname: this.medForm.controls.firstname.value,
      lastname: this.medForm.controls.lastname.value,
      email: this.medForm.controls.email.value,
      village: this.medForm.controls.village.value,
      state: this.medForm.controls.state.value,
      pincode: this.medForm.controls.pincode.value,
      addressType: this.medForm.controls.addressType.value,
      proposalType: this.medForm.controls.proposalType.value
    };
    this.documentService.getDocument().subscribe(
      (getDocumentResponse) => {
        exisitngDocuments = getDocumentResponse;
        const documentToUpdate = exisitngDocuments.find(s => s.location === "bajaj_alliance_medical.pdf");
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
