import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() buttons;
  @Output() btnClicked = new EventEmitter();
  teste;

  constructor() { }

  ngOnInit() {

  }

  public clicked(btn: string): void {
    this.teste = 'testeeeee';
    this.btnClicked.emit(btn);
  }

}
