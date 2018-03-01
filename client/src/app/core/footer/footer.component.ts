import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // TODO: Fix so Ng Flex API is used properly
  copyrightMessage = '\u00A9' + new Date().getFullYear().toString() + ' AutoTownMayor';

  constructor(public dialog: MatDialog) {}

  onOpenContact() {
    const dialogRef = this.dialog.open(ContactComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });


  }
}
