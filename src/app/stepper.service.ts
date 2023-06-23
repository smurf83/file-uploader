import { Injectable } from '@angular/core';

import { MatStepper } from '@angular/material/stepper';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  stepper!: MatStepper;
}
