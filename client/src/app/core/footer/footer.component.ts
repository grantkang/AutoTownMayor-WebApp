import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // TODO: Fix so Ng Flex API is used properly
  copyrightMessage = '\u00A9' + new Date().getFullYear().toString() + ' AutoTownMayor';
}
