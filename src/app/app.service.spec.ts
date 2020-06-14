import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClientModule]
  }));

  beforeEach(() => {
    service = TestBed.get(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud have the successful method call', () => {
    spyOn(service, 'data');
    service.data();
    expect(service.data).toHaveBeenCalled();
  });

  it('should get service values', () => {
    const data = service.data();
    expect(data).not.toBeNull();
  });
});
