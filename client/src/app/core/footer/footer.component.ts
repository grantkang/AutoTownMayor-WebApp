import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // TODO: Fix so Ng Flex API is used properly
  copyrightMessage = '\u00A9' + new Date().getFullYear().toString() + ' AutoTownMayor';

  constructor(public dialog: MatDialog, public overlay: Overlay) {}

  onOpenContact() {
    const dialogRef = this.dialog.open(ContactComponent, {
      height: '500px',
      width: '600px',
      scrollStrategy: this.overlay.scrollStrategies.noop() // This fixed the grecaptcha popup issue somehow
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });


  }
}
