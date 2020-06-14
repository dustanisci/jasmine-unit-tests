import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  btnClicked: string = 'nenhum no momento';
  buttons = [
    { content: 'btn test 1'},
    { content: 'btn test 2'},
    { content: 'btn test 3'}
  ]
}

