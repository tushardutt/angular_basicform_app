import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-form-app';
  user = { name: '', email: '' };
  submitted = false;

  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    this.submitted = true;
  }
}
