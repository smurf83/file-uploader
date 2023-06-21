import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photoFiles$!: Observable<File[]>;

  documentFiles$!: Observable<File[]>;

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    const files$ = this.filesService.findAllFiles();

    this.photoFiles$ = files$.pipe(
      map((files) =>
        files.filter((file) => {
          const extensions = ['.jpg', '.png'];
          return extensions.some((ext) =>
            file.name.toLowerCase().includes(ext)
          );
        })
      )
    );

    this.documentFiles$ = files$.pipe(
      map((files) =>
        files.filter((file) => {
          const extensions = ['.txt', '.pdf', '.doc', '.docx', '.rtf'];
          return extensions.some((ext) =>
            file.name.toLowerCase().includes(ext)
          );
        })
      )
    );
  }
}
