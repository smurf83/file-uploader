import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { UploadComponent } from '../upload/upload.component';
import { StepperService } from '../stepper.service';
import { FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-step',
  templateUrl: './upload-step.component.html',
  styleUrls: ['./upload-step.component.css'],
})
export class UploadStepComponent implements AfterViewInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('uploadComponent') uploadComponent!: UploadComponent;

  constructor(public stepperService: StepperService) {}

  ngAfterViewInit(): void {
    this.stepperService.stepper = this.stepper;
  }

  get uploadForm(): FormGroup {
    return this.uploadComponent?.uploadForm || new FormGroup({});
  }

  handleFileInput(event: any) {
    this.uploadComponent.handleFileInput(event);
  }

  handleUpload() {
    this.uploadComponent.handleUpload();
  }
}
