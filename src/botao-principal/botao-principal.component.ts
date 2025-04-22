import {Component, Input} from '@angular/core'

@Component({
  selector: 'botao-principal',
  standalone: true,
  templateUrl: './botao-principal.component.html',
  styleUrls: ['./botao-principal.component.css'],
})

export class BotaoPrincipalComponent{
  @Input() propriedade = ''

  getAlert(){
    alert(this.propriedade)
  }
}