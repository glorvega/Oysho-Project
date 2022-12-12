import { Component } from '@angular/core';
import { FOOTER_SITES } from './footer.config';
import { FooterSites } from './interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public footerSites: FooterSites[] = FOOTER_SITES;
}
