import { Component } from '@angular/core';
import { PDFJS } from 'pdfjs-dist'
import { GeneratePdfService } from './generate-pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocumentZoning';
  myState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
  }

  constructor(private generatePdfService: GeneratePdfService) {

  }

  onFocus(field: string) {
    console.log(`${field} is focused`);



    var canvas: any = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');

    if (field == 'Name') {
      this.generatePdfService.generatePdf("bajaj_alliance_non_medical.pdf", 1);
      context.globalAlpha = 0.3;
      context.fillStyle = "yellow";
      context.fillRect(220, 340, 380, 90)
    }
    if (field == 'PurposeOfInsurance') {
      context.globalAlpha = 0.3;
      context.fillStyle = "green";
      context.fillRect(220, 310, 380, 40)
    }
  }

}
