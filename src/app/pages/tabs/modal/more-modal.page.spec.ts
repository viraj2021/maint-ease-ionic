import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreModalPage } from './more-modal.page';

describe('MoreModalPage', () => {
  let component: MoreModalPage;
  let fixture: ComponentFixture<MoreModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
