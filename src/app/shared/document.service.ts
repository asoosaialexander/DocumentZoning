import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}