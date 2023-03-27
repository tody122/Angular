import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  form: FormGroup;
  confirmacao: string = '';

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmacaosenha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  salvar(){
    this.confirmacao = 'Salvo com sucesso'
  }

}
