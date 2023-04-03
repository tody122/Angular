import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imccalculadora',
  templateUrl: './imccalculadora.component.html',
  styleUrls: ['./imccalculadora.component.css']
})
export class IMCcalculadoraComponent implements OnInit {
  form: FormGroup;
  estado: string = '';
  indice : number = 0;
  peso : number = 0;
  altura : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      peso : new FormControl(0,[Validators.required, Validators.min(1), Validators.max(500)]),
      altura : new FormControl(0,[Validators.required, Validators.min(0.01), Validators.max(3)])
    });
  }
  salvar(){
    this.indice = (this.peso / (this.altura * this.altura))
  

  if(this.indice < 18.5){
    this.estado = 'Abaixo do peso normal';
  }
  else if(this.indice >= 18.5 && this.indice <= 24.9){
    this.estado = 'Peso normal';
  }
  else if(this.indice >= 25.0 && this.indice <= 29.9){
    this.estado = 'Excesso de Peso';
  }
  else if(this.indice >= 30.0 && this.indice <= 34.9){
    this.estado = 'Obesidade classe I';
  }
  else if(this.indice >= 35.0 && this.indice <= 39.9){
    this.estado = 'Obesidade classe II';
  }
  else if(this.indice >= 40){
    this.estado = 'Obesidade classe III';
  }
  }//salvar
}
