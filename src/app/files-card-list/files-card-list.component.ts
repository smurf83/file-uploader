import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-files-card-list',
  templateUrl: './files-card-list.component.html',
  styleUrls: ['./files-card-list.component.css'],
})
export class FilesCardListComponent {
  @Input()
  files!: File[];

  constructor(private dialog: MatDialog) {}
}
