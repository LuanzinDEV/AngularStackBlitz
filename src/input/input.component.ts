import {Component, Input} from '@angular/core'

@Component({
  selector: 'input-dinamico',
  standalone: true,
  templateUrl: './input.components.html',
  styleUrls: [''],
})

export class InputComponent{
    placeholder: any = 'teste';

    getValueInput(event: Event){
        const valueInput = event.target as HTMLInputElement
        this.placeholder = valueInput.value
    }
}