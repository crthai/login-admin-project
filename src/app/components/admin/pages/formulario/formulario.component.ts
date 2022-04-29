import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      confirmName: new FormControl('', [Validators.required])
    }, {
      validators: this.controlValuesAreEqual('firstName', 'confirmName')
    });
  }

  get firstName(){
    return this.cadastroForm.get('firstName');
  }
  get confirmName(){
    return this.cadastroForm.get('confirmName')!;
  }

  public submitForm(){
    console.log(this.cadastroForm.value);
  }

private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const cadastroForm = control as FormGroup
    const valueOfControlA = cadastroForm.get(controlNameA)?.value
    const valueOfControlB = cadastroForm.get(controlNameB)?.value

    if (valueOfControlA === valueOfControlB){
      return null
    } else {
      return {valuesDoNotMatch: true}
    }
  }
}

}
