import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadForm!: UntypedFormGroup;
  fileName = '';
  selectedFile: File | null = null;
  uploadError = '';

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.uploadForm = new UntypedFormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  handleUpload() {
    if (!this.selectedFile) {
      this.uploadError = 'No file selected for upload.';
      return;
    }

    const title = this.uploadForm.value.title;
    const description = this.uploadForm.value.description;

    this.filesService
      .createFile(this.selectedFile, title, description)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.uploadError = '';
        },
        error: (err) => {
          this.uploadError = err.error.message;
        },
      });
  }
}
