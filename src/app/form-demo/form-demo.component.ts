import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormDemoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  get address(): FormGroup {
    return this.form.get('address') as FormGroup;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.error('Form invalid. Please check the fields.');
    }
  }
}
