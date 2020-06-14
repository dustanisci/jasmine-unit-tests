import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { DebugElement } from '@angular/core';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    // Quando houver alterações de componente, detectará.
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the on enter', () => {
    // Espião que observa métodos ou variáveis.
    spyOn(component.btnClicked, 'emit');

    component.buttons = [
      { content: 'btn test 1'},
      { content: 'btn test 2'},
      { content: 'btn test 3'}
    ];

    fixture.detectChanges();

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons.forEach(button => button.click());

    expect(component.btnClicked.emit).toHaveBeenCalledTimes(buttons.length);
  });

  it('shoud obtain the emitter of the method', () => {
    spyOn(component.btnClicked, 'emit');
    component.clicked('btn test 1');
    expect(component.btnClicked.emit).toHaveBeenCalled();
  });

});
