import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenitialisationmotdepassePage } from './renitialisationmotdepasse.page';

describe('RenitialisationmotdepassePage', () => {
  let component: RenitialisationmotdepassePage;
  let fixture: ComponentFixture<RenitialisationmotdepassePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RenitialisationmotdepassePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenitialisationmotdepassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
