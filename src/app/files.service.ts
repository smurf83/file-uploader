import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DocumentFile {
  id?: number;
  title: string;
  description: string;
  file: {
    data: string;
    extension: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  selectedUpload: DocumentFile | null = null;
  constructor(private httpClient: HttpClient) {}

  createFile(file: File, title: string, description: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('title', title);
    formData.append('description', description);

    return this.httpClient.post('http://localhost:8080/documents', formData);
  }

  findAllFiles(): Observable<DocumentFile[]> {
    return this.httpClient.get<DocumentFile[]>(
      'http://localhost:8080/documents'
    );
  }
}
