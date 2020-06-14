import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AccordionModule, AccordionComponent } from 'ngx-bootstrap/accordion';
import { ButtonsComponent } from './buttons/buttons.component';
import { AppService } from './app.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './title/title.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AccordionModule.forRoot(),
        BrowserAnimationsModule,
        BrowserModule
      ],
      declarations: [
        AppComponent,
        ButtonsComponent,
        TitleComponent
      ],
      providers: [
        AppService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('Title', () => {
    let fixture;
    let titleComponent;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(TitleComponent);
      titleComponent = fixture.componentInstance;
    }));

    it('shoud analyze the value of the title', () => {
      titleComponent.title = 'test1';
      const test = 'test1';
      expect(titleComponent.title).toEqual(test);
    });

    it('should have an empty title', () => {
      expect(titleComponent.title).toBeUndefined();
    });
  });

});
