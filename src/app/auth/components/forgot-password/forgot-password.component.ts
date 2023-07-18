import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailInvalid!: boolean;
  forgotPasswordForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    console.log(this.forgotPasswordForm);
    
  }

  get email() {
    return this.forgotPasswordForm.controls['email'];
  }

  onSubmit() {
    // Handle form submission logic
    console.log(this.forgotPasswordForm);
    
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // this.emailInvalid = !emailRegex.test(this.email);
  }
}
