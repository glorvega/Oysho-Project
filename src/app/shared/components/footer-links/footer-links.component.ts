import { Component, Input } from '@angular/core';
import { FooterSites } from 'src/app/core/footer/interfaces/footer.interface';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss'],
})
export class FooterLinksComponent {
  @Input() sites!: FooterSites[];
}
