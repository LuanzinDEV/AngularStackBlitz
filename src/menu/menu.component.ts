import { Component } from '@angular/core';
import { BotaoPrincipalComponent } from '../botao-principal/botao-principal.component'; 

@Component({
  selector: 'menu-component',
  standalone: true,
  template: `
              <h2>Luan</h2>
              <botao-principal [propriedade]="buttonLittleCar"></botao-principal>
              <botao-principal [propriedade]="buttonBuy"></botao-principal>
            `,
  imports: [ BotaoPrincipalComponent ],
  styles: ['h2{color: red}'],
})

export class MenuComponent{
  buttonLittleCar: string = 'Carrinho'
  buttonBuy: string= 'Comprar'
}