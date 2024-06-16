import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './regiter-page.component.html',
  styles: ``
})
export class RegiterPageComponent {

  private fb = inject(FormBuilder);
  private validatorsService = inject(ValidatorsService);

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)] ],
    email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern)] ],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider] ],
    password: ['', [ Validators.required, Validators.minLength(6)] ],
    password2: ['', [ Validators.required] ]
  });


  isValidField( field: string ) {
    return this.validatorsService.isValidField(this.myForm, field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
