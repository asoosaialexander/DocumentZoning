import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentType } from './../shared/document-type.enum';
import { saveAs } from 'file-saver/FileSaver';
import { DocumentDetails } from './../shared/document-details.model';
import { DocumentService } from '../shared/document.service';

@Component({
    selector: 'app-document-upload',
    templateUrl: './document-upload.component.html',
    styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
    private document: File;
    public documentToUpload: DocumentDetails;
    public manualSelection: boolean;
    public documentTypes = [];
    @Output() documentUploadEmitter: EventEmitter<any>;

    constructor(private documentService: DocumentService) {
        this.documentUploadEmitter = new EventEmitter<any>();
        this.documentToUpload = new DocumentDetails();

        this.documentTypes = [
            { value: 1, label: 'Medical' },
            { value: 2, label: 'Non-Medical' }
        ];
    }

    public handleFileInput(event: any) {
        this.document = event.target.files.item(0);
        this.identifyFileTypeFromBarcode();
        if (!this.documentToUpload.typeId) {
            this.setManualSelectionOfFileType();
        }
    }

    private identifyFileTypeFromBarcode() {
        this.documentToUpload.typeId = null;
        this.manualSelection = false;

        //write code here to identify file type from document barcode and set type to this.fileType
    }

    private setManualSelectionOfFileType() {
        this.manualSelection = true;
        this.changeType(DocumentType.medical);
    }

    public changeType(event: number) {
        this.documentToUpload.typeId = +event;
        this.documentToUpload.typeName = this.documentTypes.find(s => s.value === this.documentToUpload.typeId).label;
    }

    public submit() {
        let exisitngDocuments: DocumentDetails[];
        this.documentService.getDocument().subscribe(
            (getDocumentResponse) => {
                exisitngDocuments = getDocumentResponse;
                if (exisitngDocuments && exisitngDocuments.length > 0) {
                    this.documentToUpload.id = Math.max.apply(Math, exisitngDocuments.map(function (o) { return o.id; })) + 1;
                } else {
                    this.documentToUpload.id = 1
                }
                exisitngDocuments.push(this.documentToUpload);
                this.uploadDocument(exisitngDocuments);
            },
            (getDocumentError) => {
            })
    }

    private uploadDocument(exisitngDocuments: any[]) {
        const fileName = 'document_' + this.documentToUpload.id + '.pdf';
        let formData = new FormData();
        formData.append("uploads[]", this.document, this.document.name);
        this.documentService.uploadDocument(formData).subscribe(
            (uploadDocumentResponse) => {
                this.documentToUpload.location = fileName;
                this.documentService.updateDocument(exisitngDocuments).subscribe(
                    (updateDocumentResponse) => {
                        this.documentToUpload = new DocumentDetails();
                    },
                    (updateDocumentError) => {
                    })
            },
            (uploadDocumentError) => {
                const error = uploadDocumentError;
            });
    }
}
