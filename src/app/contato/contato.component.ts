import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome: ['', [ //campo nome começa com valor vazio
      Validators.minLength(4), // minimo de 4 caracteres
      Validators.required //não é opcional
    ]],
    assunto: ['', [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ['', [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ['', [
      Validators.email,
      Validators.required
    ]],
    mensagem: ['',[
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder
  ){}

  enviarFormulario(){
    alert('A mensagem foi enviado');
    this.formContato.reset();
  }

}
