import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { fallIn } from 'src/app/shared/common/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fallIn()],
  host: { '[@fallIn]': '' }
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
      {
        validator: this.ConfirmedValidator('password', 'confirmPassword'),
      });
  }

  get f() {
    return this.signupForm.controls;
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  submitForm() {
    this.submitted = true;
    if (!this.signupForm.valid) {
      for (const key of Object.keys(this.f)) {
        if (this.f[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector('[formControlName="' + key + '"]');
          invalidControl.focus();
          break;
        }
      }
      return;
    }
    console.log(this.signupForm.value);
  }

  scrollTop() {
    window.scrollTo({
      top: 0
    });
  }
}
