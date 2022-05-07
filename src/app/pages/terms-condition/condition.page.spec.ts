import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConditionPage } from './condition.page';

describe('ConditionPage', () => {
  let component: ConditionPage;
  let fixture: ComponentFixture<ConditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
