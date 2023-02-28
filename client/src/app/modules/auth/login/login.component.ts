import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fallIn } from 'src/app/shared/common/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fallIn()],
  host: { '[@fallIn]': '' }
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor( private fb: FormBuilder, private el: ElementRef ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if(!this.loginForm.valid) {
      for (const key of Object.keys(this.f)) {
        if (this.f[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector('[formControlName="' + key + '"]');
          invalidControl.focus();
          break;
        }
      }
      return;
    }
    console.log(this.loginForm.value);
  }

  scrollTop() {
    window.scrollTo({
      top: 0
    });
  }
}
