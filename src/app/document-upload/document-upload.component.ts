import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentType } from './../shared/document-type.enum';
// import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
  private document: File;
  public documentType: DocumentType;
  public manualSelection: boolean;
  public documentName: string;
  public documentTypes = [];
  @Output() documentUploadEmitter: EventEmitter<any>;

  constructor() {
    this.documentUploadEmitter = new EventEmitter<any>();
    this.documentTypes = [
      { value: '1', label: 'Medical' },
      { value: '2', label: 'Non-Medical' }
    ];
  }

  public handleFileInput(files: FileList) {
    this.document = files.item(0);
    this.copyFileToTypeFolder();
    this.identifyFileTypeFromBarcode();
    if (!this.documentType) {
      this.setManualSelectionOfFileType();
    }
  }

  private copyFileToTypeFolder() {
    // const blob = new Blob([document], { type: 'application/pdf' });
    // saveAs(document, `./../../assets/pdf/${'testDoc'}`);
  }

  private identifyFileTypeFromBarcode() {
    this.documentType = null;
    this.manualSelection = false;

    //write code here to identify file type from document barcode and set type to this.fileType
  }

  private setManualSelectionOfFileType() {
    this.manualSelection = true;
    this.documentType = DocumentType.medical;
  }

  public submit() {
    //save the file from here
  }
}
