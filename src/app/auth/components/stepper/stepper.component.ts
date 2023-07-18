import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  stepTitle!: string;
  currentStep!: number;
  firstSteps!: string[];
  secondSteps!: string[];
  thirdSteps!: string[];

  ngOnInit() {
    this.stepTitle = 'Tell us more about yourself';
    this.currentStep = 0;
    this.firstSteps = [
      'Exporter',
      'Importer',
      'CHA',
      'Forwarder'
    ];
    this.secondSteps = [
      '0 - 10',
      '10 - 50',
      '50 - 100',
      '100+'
    ];
    this.thirdSteps = [
      'Nhava Sheva',
      'Mundra',
      'Hazira',
      'Chennai'
    ];
  }

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
