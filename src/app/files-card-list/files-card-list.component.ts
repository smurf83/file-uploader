import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentFile } from '../files.service';

@Component({
  selector: 'app-files-card-list',
  templateUrl: './files-card-list.component.html',
  styleUrls: ['./files-card-list.component.css'],
})
export class FilesCardListComponent {
  @Input()
  files!: DocumentFile[];

  constructor(private dialog: MatDialog) {}
}
