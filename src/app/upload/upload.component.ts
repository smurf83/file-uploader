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
    if (this.selectedFile) {
      this.filesService.selectedUpload = {
        file: this.selectedFile,
        title: this.uploadForm.value.title,
        description: this.uploadForm.value.description,
      };
    } else {
      this.uploadError = 'No file selected for upload.';
    }

    const upload = this.filesService.selectedUpload;

    if (upload) {
      this.filesService
        .createFile(upload.file, upload.title, upload.description)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.uploadError = '';
            this.filesService.selectedUpload = null;
          },
          error: (err) => {
            this.uploadError = err.error.message;
          },
        });
    }
  }
}
