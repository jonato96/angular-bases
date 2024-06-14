import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './regiter-page.component.html',
  styles: ``
})
export class RegiterPageComponent {

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  });


  isValidField() {
    // TODO: obtener validacion desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
