import { Component, OnInit } from '@angular/core';
import { FormOptions, FormsFactoryService } from 'ngx-core-library';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CustomFormControlsOptions } from './custom-form-controls.config';

@Component({
  selector: 'app-custom-form-controls',
  templateUrl: './custom-form-controls.component.html',
  styleUrls: ['./custom-form-controls.component.scss']
})
export class CustomFormControlsComponent implements OnInit {

  controlsOptions: FormOptions;
  formVisibility: object;
  formGroup: FormGroup;

  constructor(
    private formFactory: FormsFactoryService,
    private formBuilder: FormBuilder) { 
      this.controlsOptions = CustomFormControlsOptions;
      this.formVisibility = this.formFactory.setFiltersVisibility(this.controlsOptions);
      this.formGroup = this.formBuilder.group(this.formFactory.generateForm(this.controlsOptions, this.formVisibility));
  }

  ngOnInit(): void {
    
  }



}
