import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PartDetailPage } from './part-detail';

describe('PartDetailPage', () => {
  let component: PartDetailPage;
  let fixture: ComponentFixture<PartDetailPage>;
  const entityMock = {
    id: 0,
    user: {},
  };

  const activatedRouteMock = { data: of({ data: entityMock }) } as any as ActivatedRoute;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PartDetailPage],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [TranslateModule.forRoot(), NgxWebstorageModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
        providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PartDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('OnInit', () => {
    expect(component.part).toEqual(entityMock);
  });
});
