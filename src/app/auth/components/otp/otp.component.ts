import { Component, OnInit,  OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit, OnDestroy {
  countdown!: string;
  timerSubscription!: Subscription;
  otpForm!: FormGroup;
  invalidOtp: boolean = false;
  otpControls: string[] = ['digit1', 'digit2', 'digit3', 'digit4', 'digit5', 'digit6'];

  constructor(private formBuilder: FormBuilder){}

  ngOnDestroy() {
    this.stopTimer();
  }

  ngOnInit(): void {
    this.buildOtpForm();
    this.startTimer();  
  }

  buildOtpForm() {
    this.otpForm = this.formBuilder.group({
      digit1: ['', Validators.required],
      digit2: ['', Validators.required],
      digit3: ['', Validators.required],
      digit4: ['', Validators.required],
      digit5: ['', Validators.required],
      digit6: ['', Validators.required]
    });
  }

  verifyOtp() {
    if (this.otpForm.valid) {
      // Perform OTP verification logic here
      // If OTP is valid, proceed with the next steps
      // Otherwise, set invalidOtp to true
      this.invalidOtp = false;
    } else {
      this.invalidOtp = true;
    }
  }

  startTimer() {
    const duration = 60; // Duration in seconds (1 minute)
    const timer = interval(1000); // Timer that emits every second
    this.timerSubscription = timer.subscribe((value: number) => {
      const remainingSeconds = duration - value;
      if (remainingSeconds >= 0) {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        this.countdown = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
      } else {
        this.countdown = '00:00'; // Timer expired
        this.stopTimer();
      }
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
  }

  moveToNextInput(event: any, prevInputId?: string, nextInputId?: string) {
    const input = event.target as HTMLInputElement;
    const maxLength = input.maxLength;
    const currentLength = input.value.length;
    const keyCode = event.keyCode || event.which;
  
    if (currentLength === maxLength && nextInputId) {
      const nextInput = document.getElementById(nextInputId) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (keyCode === 8 && currentLength === 0 && prevInputId) {
      const prevInput = document.getElementById(prevInputId) as HTMLInputElement;
      if (prevInput) {
        prevInput.value = '';
        prevInput.focus();
      }
    }
  }

}
