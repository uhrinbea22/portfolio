import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bea';

  checkoutForm = this.formBuilder.group({
    name: ''
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }



}
