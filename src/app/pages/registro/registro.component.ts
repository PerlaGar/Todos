import { Component } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  form: FormGroup;
  constructor(formBuilder: FormBuilder){
    this.form= formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terminos: [false, Validators.requiredTrue]
    });
  }
  crearUsuario(){
    console.log('Form: ', this.form);
    if(this.form.valid){
      console.log('Enviar datos');
    }else{
      console.log('El formulario no es valido');
    }
  }

}
