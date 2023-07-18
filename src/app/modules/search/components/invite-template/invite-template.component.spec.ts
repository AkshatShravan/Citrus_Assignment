import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTemplateComponent } from './invite-template.component';

describe('InviteTemplateComponent', () => {
  let component: InviteTemplateComponent;
  let fixture: ComponentFixture<InviteTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteTemplateComponent]
    });
    fixture = TestBed.createComponent(InviteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
