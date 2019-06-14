import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentType } from './../shared/document-type.enum';

@Component({
    selector: 'app-document-upload',
    templateUrl: './document-upload.component.html',
    styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
    private document: File;
    private documentType: DocumentType;
    private manualSelection: boolean;
    @Output() documentUploadEmitter: EventEmitter<any>;

    constructor() {
        this.documentUploadEmitter = new EventEmitter<any>();
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

        // this.document = 
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
        this.documentUploadEmitter.emit({ documentSelected: this.document, documentType: this.documentType });
    }
}