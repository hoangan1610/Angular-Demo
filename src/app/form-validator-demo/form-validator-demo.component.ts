import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-validator-demo',
  templateUrl: './form-validator-demo.component.html',
  styleUrls: ['./form-validator-demo.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormValidatorDemoComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      customField: ['', this.customValidator]
    });
  }

  ngOnInit(): void {
    this.form.controls['confirmPassword'].setValidators([Validators.required, this.matchValues('password')]);
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control.parent as FormGroup;
      if (!form) {
        return null;
      }
      return control.value === form.controls[matchTo].value ? null : { isMatching: false };
    };
  }

  customValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const valid = /^[a-zA-Z]+$/.test(value);
    return valid ? null : { invalidCustomField: 'Only letters are allowed' };
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.error('Form invalid. Please check the fields.');
    }
  }

  get formControls() {
    return this.form.controls;
  }
}
