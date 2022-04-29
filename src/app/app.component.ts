import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="getDados">
  <h1 style="background-color: white"> {{getDados.telefoneContato}} </h1>
  </ng-template>
  <app-outinput (enviarDados)="setDados($event)"></app-outinput>
  <router-outlet></router-outlet>`
})
export class AppComponent {

  public getDados: {telefoneContato: number} | undefined;

  public setDados(event: {telefoneContato: number}){
    this.getDados = event;
  }

}
