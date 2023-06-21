import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UploadFile {
  file: File;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  selectedUpload: UploadFile | null = null;
  constructor(private httpClient: HttpClient) {}

  createFile(file: File, title: string, description: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('title', title);
    formData.append('description', description);

    return this.httpClient.post('http://localhost:8080/documents', formData);
  }

  findAllFiles(): Observable<File[]> {
    // Mock files
    const mockFile1 = new File(['Photo'], 'mockFile1.jpg');
    const mockFile2 = new File(['Document'], 'mockFile2.txt');
    const mockFile3 = new File(['Photo'], 'mockFile3.jpg');
    const mockFile4 = new File(['Document'], 'mockFile4.txt');
    const mockFile5 = new File(['Photo'], 'mockFile5.jpg');
    const mockFile6 = new File(['Document'], 'mockFile6.txt');
    const mockFile7 = new File(['Photo'], 'mockFile7.jpg');
    const mockFile8 = new File(['Document'], 'mockFile8.txt');

    // Use of operator to create Observable
    return of([
      mockFile1,
      mockFile2,
      mockFile3,
      mockFile4,
      mockFile5,
      mockFile6,
      mockFile7,
      mockFile8,
    ]);
  }
}
