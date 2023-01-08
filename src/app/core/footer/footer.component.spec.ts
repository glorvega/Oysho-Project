import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { FOOTER_SITES } from './footer.config';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render footer links', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a').length).toBe(FOOTER_SITES.length);
  });
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
