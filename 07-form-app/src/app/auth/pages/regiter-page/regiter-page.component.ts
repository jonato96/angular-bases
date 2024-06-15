import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './regiter-page.component.html',
  styles: ``
})
export class RegiterPageComponent {

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)] ],
    email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern)] ],
    username: ['', [ Validators.required, customValidators.cantBeStrider] ],
    password: ['', [ Validators.required, Validators.minLength(6)] ],
    password2: ['', [ Validators.required] ]
  });


  isValidField() {
    // TODO: obtener validacion desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
