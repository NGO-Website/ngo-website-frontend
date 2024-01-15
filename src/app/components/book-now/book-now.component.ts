// book-now.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  constructor(private router: Router) { }

  formData: any = {
    name: '',
    contactDetails: '',
    serviceType: [],
    billingMethod: [] 
  };

  serviceTypeOptions = ['Option 1', 'Option 2', 'Option 3'];
  billingMethodOptions = ['Credit Card', 'PayPal', 'Bank Transfer'];

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }

  navigateToNewPage() {
    this.router.navigate(['/home']);
  }

  toggleServiceType(option: string) {
    const index = this.formData.serviceType.indexOf(option);

    if (index === -1) {
      this.formData.serviceType.push(option);
    } else {
      this.formData.serviceType.splice(index, 1);
    }
  }
  
  updateBillingMethod(option: string) {
    this.formData.billingMethod = option;
  }
}