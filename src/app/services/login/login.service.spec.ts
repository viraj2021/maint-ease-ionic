import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxWebstorageModule.forRoot()],
    })
  );

  it('should be created', () => {
    const service: LoginService = TestBed.inject(LoginService);
    expect(service).toBeTruthy();
  });
});
