import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { BotaoPrincipalComponent } from './botao-principal/botao-principal.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, BotaoPrincipalComponent, InputComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <menu-component></menu-component>
    <br><br><br>
    <input-dinamico></input-dinamico>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
