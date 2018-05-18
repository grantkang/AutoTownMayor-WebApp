import { Component, OnInit } from '@angular/core';
import { AppConstant } from '../app.constant';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: [
  ],
})
export class CompanyInfoComponent implements OnInit {
  companyInfo = AppConstant.COMPANY_INFO;

  // TODO: Think I have to implement a dom sanitizer in order to use string interpolation for URLs in iframe
  ngOnInit(): void {

  }
}
