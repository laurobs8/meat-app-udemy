import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: string;
  @Input() label: string;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    // chaado quando o conteudo for definido 
    this.input = this.model || this.control; // aqui tenta pegar umas das duas diretivas. Se a diretiva ngModel nao estiver disponivel, vai para a opção formControlName
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);

  }
}
