import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLikeComponent } from './boton-like.component';

describe('BotonLikeComponent', () => {
  let component: BotonLikeComponent;
  let fixture: ComponentFixture<BotonLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonLikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
