import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student-Register-App';
  
  student = {
    fullName: '',
    email: '',
    dob: '',
    gender: '',
    course: ''
  };

  courses: string[] = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'];

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.student);
      alert('Registration Successful!');

      // Reset the form after submission
      form.reset();
      //Update File
    }
  }
}
