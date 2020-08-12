import { Component, OnInit } from '@angular/core';

// Core Library 
import { FormControlOptions, FormControlService, CoreFormControl, AutocompleteService } from 'ngx-core-library';

import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-form-controls-example',
  templateUrl: './form-controls-example.component.html',
  styleUrls: ['./form-controls-example.component.scss'],
  providers: [
    FormControlService
  ]
})
export class FormControlsExampleComponent implements OnInit {

  moment: moment.Moment;
  
  inputOptions: FormControlOptions;
  inputControl: CoreFormControl;
  
  buttonToggleOptions: FormControlOptions;
  btnToggle: CoreFormControl;

  autocompleteOptions: FormControlOptions;
  inputAutocomplete: CoreFormControl;
  autocompleteLoading: boolean = false;

  loaded: boolean = false;
  
  datePickerControl: CoreFormControl;
  datePickerOptions: FormControlOptions;

  rangePickerOptions: FormControlOptions;
  rangeInput: CoreFormControl; 

  rangeDatePickerOptions: FormControlOptions;
  rangeDateInput: CoreFormControl; 

  slideToggleOptions: FormControlOptions;
  slideInput: CoreFormControl; 

  tileSelectOptions: FormControlOptions;
  tileInput: CoreFormControl;

  periodPickerOptions: FormControlOptions;
  periodInput: CoreFormControl;
  
  checklistOptions: FormControlOptions;
  checklistInput: CoreFormControl;

  selectOptions: FormControlOptions;
  selectInput: CoreFormControl;

  constructor(private autocompleteService: AutocompleteService) { }

  ngOnInit(): void {


    /***********************************************
     *              INPUT
     ***********************************************/
    this.inputOptions = {
      label: 'Input',
      class: 'col-sm-12 col-md-12 col-lg-4',
      control: {
        type: 'input',
        appearance: 'outline'
      }
    }

    this.inputControl = new CoreFormControl(this.inputOptions);
    // this.controlService.setValue('algo');
    this.inputControl.setLabel('Nuevo Label');
    this.inputControl.setValue('Default Value');
    //this.inputControl.hidden = true;

    this.inputControl.controlValueChanges().subscribe( value => {
      console.log('value changes', value);
    })


  /***********************************************
   *              Button Toggle
   ***********************************************/
    this.buttonToggleOptions = {
      label: 'Button Toggle',
      class: 'col-sm-12 col-md-12 col-lg-4',
      control: {
        type: 'button-toggle',
        appearance: 'outline',
        options: [
          { key: 'EXCEL', value: 'EXCEL', matIcon: 'receipt', tooltip: 'Excel' },
          { key: 'Search', value: 'Search', matIcon: 'search', tooltip: 'Buscar' }
          //{ key: 'PDF', value: 'PDF', icon: 'far fa-file-pdf fa-lg', tooltip: 'PDF' },
          //{ key: 'PDF', value: 'PDF', svgIcon: 'comisiones_poliza', tooltip: 'Word' }
        ]
      }
    }

    this.btnToggle = new CoreFormControl(this.buttonToggleOptions);

    /***********************************************
     *              AUTOCOMPLETE
     ***********************************************/
    
     this.autocompleteOptions = {
      label: 'Buscador',
      control: { 
        type: 'autocomplete',
        inputId: 'searchInput',
        class: 'col-sm-8',
        options: {
          value: 'last_name',
          key: 'first_name',
          description: 'first_name'
        },
        //suffixIcon: 'search',
        suffixTooltip: '',
        pasteFieldOnSelect: 'id',
        defaultValue: '',
      },
      class: 'col-sm-12 col-md-12 col-lg-4',
      required: true
    };
    
    this.inputAutocomplete = new CoreFormControl(this.autocompleteOptions);


     /***********************************************
     *              DATEPICKER
     ***********************************************/
    this.datePickerOptions = {
      label: 'Datepicker',
      class: 'col-sm-12 col-md-12 col-lg-4',
      control: {
        type: 'datepicker',
        appearance: 'outline',
        config: {
          max: moment(),
          min: moment().subtract(10,'y')
        }
      }
    }

    this.datePickerControl = new CoreFormControl(this.datePickerOptions);

     /***********************************************
     *             RANGE MONTHYEAR
     ***********************************************/
    this.rangePickerOptions = {
      label: 'Datepicker',
      class: 'col-sm-12 col-md-12 col-lg-4',
      control: {
        type: 'monthyear-range',
        config: {
          max: moment(),
          min: moment().subtract(10,'y')
        }
      }
    }

    this.rangeInput = new CoreFormControl(this.rangePickerOptions);

     /***********************************************
     *             RANGE DATE
     ***********************************************/
    this.rangeDatePickerOptions = {
      label: 'Datepicker',
      class: 'col-sm-12 col-md-12 col-lg-4',
      control: {
        type: 'date-range',
        config: {
          max: moment(),
          min: moment().subtract(10,'y')
        }
      }
    }

    this.rangeDateInput = new CoreFormControl(this.rangeDatePickerOptions);

     /***********************************************
     *             SLIDE TOGGLE
     ***********************************************/
    this.slideToggleOptions = {
      label: 'Slide',
      class: 'col-sm-12 col-md-12 col-lg-4',
      control: {
        type: 'slide',
        defaultValue: true
      }
    }

    this.slideInput = new CoreFormControl(this.slideToggleOptions);

     /***********************************************
     *             TILE SELECT
     ***********************************************/

    this.tileSelectOptions = {
      label: 'Flota',
      disabled: false,
      control: {
          type: 'tile-select',
          defaultValue: false,
          items: [
              { key: false, value: 'Feliz', icon: 'mood' },
              { key: true, value: 'Triste', icon: 'mood_bad' }
          ]
      },
      class: 'col-sm-12 col-md-12 col-lg-12'
    }

    this.tileInput = new CoreFormControl(this.tileSelectOptions);

    /***********************************************
     *             PERIOD PICKER
     ***********************************************/

    this.periodPickerOptions = {
      label: 'Period Picker',
      control: { 
        type: 'periodpicker',
        appearance: 'outline',
        config: {
          min: moment()
        },
      },
      class: 'col-sm-12 col-md-12 col-lg-4'
    }

    this.periodInput = new CoreFormControl(this.periodPickerOptions);

    /***********************************************
     *             CHECKBOXLIST
     ***********************************************/

    this.checklistOptions = {
      label: 'CheckList',
      control: { 
        type: 'check-list',
        appearance: 'outline',
        options: {
          key: 'key',
          value: 'value',
          description: 'description'
        },
        pasteFieldOnSelect: 'key',
        items: [
          { key: 'Item 1', value: 'Item 1', description: 'Desc 1' },
          { key: 'Item 2', value: 'Item 2', description: 'Desc 2' },
        ]
      },
      class: 'col-sm-12 col-md-12 col-lg-7'
    }

    this.checklistInput = new CoreFormControl(this.checklistOptions);


    /***********************************************
     *             SELECT
     ***********************************************/

    this.selectOptions = {
      label: 'Select',
      control: { 
        type: 'select',
        appearance: 'outline',
        options: {
          key: 'key',
          value: 'value',
          description: 'description'
        },
        pasteFieldOnSelect: 'key',
        items: [
          { key: 'Item 1', value: 'Item 1', description: 'Desc 1' },
          { key: 'Item 2', value: 'Item 2', description: 'Desc 2' },
        ]
      },
      class: 'col-sm-12 col-md-12 col-lg-4'
    }

    this.selectInput = new CoreFormControl(this.selectOptions);
    
    
  }

  controlValueChange(value){
    //console.log('input change', value);
  }

  itemSelected(event){
    console.log('item selected', event);
  }

  autocompleteChange(value){
    
    if(value && value.length > 4){
      let url = 'https://gorest.co.in/public-api/users?first_name=';
      this.autocompleteLoading = true;
      this.autocompleteService.getItems(`${url}${value}`).subscribe( (res: object[]) => {

        console.log('res', res);
        if(res && res['result'].length > 0){
          this.inputAutocomplete.setItems(res['result']);
        }
        
        this.autocompleteLoading = false;
      },
      error => {
        this.autocompleteLoading = false;
      });

    }
    
  }

  get value(){
    return this.inputControl.getControl().value;  
  }

  click(){
    
  }

  blurInput(event){
    console.log('blur event', event);
  }


  


}
