import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    /*    router = new Router(null, null, null, null, null, null, null);
    fixture = TestBed.createComponent(HomeComponent);
    component = new HomeComponent(router);
    component = fixture.componentInstance;
    fixture.detectChanges(); */
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to the collection page when gotoCollection is called', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.gotoCollection(123);
    expect(navigateSpy).toHaveBeenCalledWith(['list', 123]);
  });
});
