import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormArrayDemoComponent {
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      lessons: this.builder.array([])
    });
  }

  get lessons(): FormArray {
    return this.form.get('lessons') as FormArray;
  }

  get lessonsControls(): FormGroup[] {
    return this.lessons.controls as FormGroup[];
  }

  addLessonForm() {
    const lessonForm = this.builder.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  get valueOfLessons() {
    return this.lessons.controls.map(eachGroup => eachGroup.value);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.error('Form invalid. Please check the fields.');
    }
  }
}
