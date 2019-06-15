import { Component, OnInit } from '@angular/core';
import { GeneratePdfService } from '../shared/generate-pdf.service';

@Component({
  selector: 'app-document-data-entry',
  templateUrl: './document-data-entry.component.html',
  styleUrls: ['./document-data-entry.component.css']
})
export class DocumentDataEntryComponent implements OnInit {

  formType:string="NonMedicalForm";

  constructor(private generatePdfService: GeneratePdfService) {
  }

  ngOnInit() {
  }

  onFocus(field: string) {
    console.log(`${field} is focused`);
    this.generatePdfService.generatePdf("bajaj_alliance_non_medical.pdf", field);
  }

}
