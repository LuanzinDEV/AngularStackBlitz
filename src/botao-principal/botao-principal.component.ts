import {Component} from '@angular/core'

@Component({
  selector: 'botao-principal',
  templateUrl: './botao-principal.component.html',
  styleUrls: ['./botao-principal.component.css'],
})

export class BotaoPrincipalComponent{
  buttonText = ['Comprar', 'Vender']
}