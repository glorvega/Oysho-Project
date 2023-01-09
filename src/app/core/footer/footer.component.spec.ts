import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer links', () => {
    fixture.detectChanges();
    const links = htmlElement.querySelectorAll(
      '.footer-container__row app-footer-links'
    );
    expect(links.length).toBe(3);
  });

  it('should render copyright text', () => {
    fixture.detectChanges();
    const copyright = htmlElement.querySelector(
      '.footer-container__social--copyright p'
    );
    expect(copyright?.textContent).toContain('Copyright');
  });

  it('should render QR image', () => {
    fixture.detectChanges();
    const img = htmlElement.querySelector('.footer-container__row__qr img');
    expect(img?.getAttribute('src')).toBe(
      'https://static.oysho.net/6/cms/assets/uploads/qrDownload_1.png?imwidth=200&ts=20221129021707'
    );
  });
});
