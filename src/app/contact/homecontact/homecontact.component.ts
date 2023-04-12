import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { MainService } from 'src/app/services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homecontact',
  templateUrl: './homecontact.component.html',
  styleUrls: ['./homecontact.component.css']
})
export class HomecontactComponent implements OnInit{

  contact: Contact[] = [];
  contactFormGroup: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private mainService: MainService,
    private meta: Meta
  ) {
    this.contactFormGroup = _formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      subject: ['', Validators.required],
      message: [''],
    });
  }

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'This an African Carbon Market' }, 
      { name: 'keywords', content: 'rafiki carbon, rafiki carbon market, kenyan carbon market, rafiki, carbon market, net zero, net zero africa, african carbon' } 
  ]);
  }

  onSubmit() {
    if (!this.contactFormGroup.valid) {
      const controls = this.contactFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.mainService.showSnackBarMessage(`Missing Field ${name}`)
        }
      }
      return;
    }

    let capturedData: Contact = this.contactFormGroup.value;

    this.mainService
      .makeDataPostRequest(`${environment.MAIN_URL}/contact/`, capturedData)
      .subscribe(
        (data) => {
          this.mainService.showSnackBarMessage("success"),
          
          this.router.navigate(['/market-place/thanks']);
        },
        (error) => {
          this.mainService.showSnackBarMessage(error)
        }
      );
  }

}
