import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outinput',
  templateUrl: './outinput.component.html',
  styleUrls: ['./outinput.component.scss']
})
export class OutinputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

   public list: Array<{telefoneContato: number}> = [
    {telefoneContato: 7926332983}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }
}
