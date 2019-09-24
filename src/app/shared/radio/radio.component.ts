import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]; // input, informações que vem de fora
  value: any;
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
    // metodo que vai ser chamado pelas diretivas quando quererm passar um valor pro seu componente 
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    // tem que chamar essa funcao sempre que o valor interno do componente mudar
    // onde muda? =>  nesse caso, no metodo setValue acima
  }

  registerOnTouched(fn: any): void {
    // registrar que o usuarioo entrou no componente
  }

}

// A implementação de ControlValueAccessor e a declaração de NG_VALUE_ACCESSOR
//  se faz necessária para que o componente personalizado possa se integrar com a 
//  API de Forms do Angular. Não é pelo motivo de ser mais complexo.

// Quando fazemos essa integração, o componente passa a usar as funções recebidas
//  nas callbacks registerOnChange e registerOnTouched para indicar o seu valor interno 
//  para o formulário em questão, de forma que quando acessamos "form.value", o 
//  valor do componente estará lá presente.

// Ao implementar ControlValueAccessor, o componente pode ser usado com ngModel ou formControlName.