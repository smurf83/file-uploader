import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DocumentFile, FilesService } from '../files.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photoFiles$!: Observable<DocumentFile[]>;

  documentFiles$!: Observable<DocumentFile[]>;

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    const files$ = this.filesService.findAllFiles();

    this.filesService.findAllFiles().subscribe((data) => {
      console.log(data);
    });

    this.photoFiles$ = files$.pipe(
      map((files: DocumentFile[]) =>
        files.filter((file: DocumentFile) => {
          const extensions = ['.jpg', '.png'];
          return extensions.includes(file?.file?.extension);
        })
      )
    );

    this.documentFiles$ = files$.pipe(
      map((files: DocumentFile[]) =>
        files.filter((file: DocumentFile) => {
          const extensions = ['.txt', '.pdf', '.doc', '.docx', '.rtf'];
          return extensions.includes(file?.file?.extension);
        })
      )
    );
  }
}
