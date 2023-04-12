import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Emitter } from 'src/app/interfaces/emitter';
import { Offsetter } from 'src/app/interfaces/offsetter';
import { MainService } from 'src/app/services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adopters',
  templateUrl: './adopters.component.html',
  styleUrls: ['./adopters.component.css']
})
export class AdoptersComponent implements OnInit {

  emitter: Emitter[] = [];
  offsetter: Offsetter[] = [];
  offsetterFormGroup: FormGroup;
  emitterFormGroup: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private mainService: MainService,
    private meta: Meta
  ) {
    this.offsetterFormGroup = _formBuilder.group({
      project_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      project_type: ['', Validators.required],
      country: ['', Validators.required],
      more_projects: [''],
    });

    this.emitterFormGroup = _formBuilder.group({
      company_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      project_type: ['', Validators.required],
      country: ['', Validators.required],
      more_projects: [''],
    });
  }

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'This an African Carbon Market' }, 
      { name: 'keywords', content: 'rafiki carbon, rafiki carbon market, kenyan carbon market, rafiki, carbon market, net zero, net zero africa, african carbon' } 
  ]);
  }

  onSubmitOffsetter() {
    if (!this.offsetterFormGroup.valid) {
      const controls = this.offsetterFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.mainService.showSnackBarMessage(`Missing Field ${name}`)
        }
      }
      return;
    }

    let capturedData: Offsetter = this.offsetterFormGroup.value;

    this.mainService
      .makeDataPostRequest(`${environment.MAIN_URL}/offsetters/`, capturedData)
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

  onSubmitEmitter() {
    if (!this.emitterFormGroup.valid) {
      const controls = this.emitterFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.mainService.showSnackBarMessage(`Missing Field ${name}`)
        }
      }
      return;
    }

    let capturedData: Emitter = this.emitterFormGroup.value;

    this.mainService
      .makeDataPostRequest(`${environment.MAIN_URL}/emitters/`, capturedData)
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
