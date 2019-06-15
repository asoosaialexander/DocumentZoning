import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { DocumentDetails } from './../shared/document-details.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    public getDocument(): Observable<any> {
        return this.http.get('http://localhost:3000/');
    }

    public updateDocument(documentDetails: any): Observable<any> {
        return this.http.post('http://localhost:3000/', documentDetails);
    }

    public upload(oldpath: any, fileName: any): Observable<any> {
        const input = { oldpath: oldpath, fileName: fileName }
        return this.http.post('http://localhost:3000/upload', input);
    }

    // public uploadDocument(endpoint: any, fileName: any, fileToUpload: File, documentToUpload: any): Observable<any> {
    //     const formData: FormData = new FormData();
    //     formData.append('uploadFile', fileToUpload, fileName);
    //     return this.http.post(endpoint, formData);
    // }

    public uploadDocument(formData: FormData): Observable<any> {
        return this.http.post('http://localhost:3000/upload', formData)
    }
}