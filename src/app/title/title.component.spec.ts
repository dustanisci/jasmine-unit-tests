import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Title', () => {
    it('se o conteudo é igual', () => {
      component.title = 'teste 1';
      expect(component.title).toEqual('teste 1');
    });

    it('se o conteudo é vazio', () => {
      component.title = undefined;
      expect(component.title).toBeUndefined();
    });
  });

});
