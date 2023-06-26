import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadForm!: FormGroup;
  fileName = '';
  selectedFile: File | null = null;
  uploadError = '';

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.uploadForm = new FormGroup({
      fileType: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const fileType = this.uploadForm.value.fileType;

      if (file.name.toLowerCase().endsWith(fileType)) {
        this.fileName = file.name;
        this.selectedFile = file;
      } else {
        this.uploadError = `File type must be ${fileType}.`;
      }
    }
  }

  handleUpload() {
    if (this.selectedFile) {
      this.filesService.selectedUpload = {
        file: this.selectedFile,
        title: this.uploadForm.value.title,
        description: this.uploadForm.value.description,
        fileType: this.uploadForm.value.fileType,
      };
    } else {
      this.uploadError = 'No file selected for upload.';
    }

    const upload = this.filesService.selectedUpload;

    if (upload) {
      this.filesService
        .createFile(
          upload.file,
          upload.title,
          upload.description
          //upload.fileType
        )
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
