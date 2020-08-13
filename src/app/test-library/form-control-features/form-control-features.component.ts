import { Component, OnInit } from '@angular/core';
import { CoreFormControls, CoreFormControl, FormControlOptions, AutocompleteService } from 'ngx-core-library';

@Component({
  selector: 'app-form-control-features',
  templateUrl: './form-control-features.component.html',
  styleUrls: ['./form-control-features.component.scss']
})
export class FormControlFeaturesComponent implements OnInit {

  inputAutocomplete: CoreFormControl;
  autocompleteOptions: FormControlOptions;
  autocompleteLoading: boolean = false;

  // propiedades del input
  disabled: boolean = false;
  required: boolean = true;
  hidden: boolean = false;

  constructor(private autocompleteService: AutocompleteService) { }

  ngOnInit(): void {

     /***********************************************
     *              AUTOCOMPLETE
     ***********************************************/
    
    this.autocompleteOptions = {
      label: 'Autocomplete Async (First Name User)',
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
      class: 'col-sm-12 col-md-12 col-lg-12',
      required: true
    };
    
    this.inputAutocomplete = new CoreFormControl(this.autocompleteOptions);



  }

  toggleEnabled(){
   !this.disabled ? this.inputAutocomplete.disable() : this.inputAutocomplete.enable();
  }

  toggleRequired(){
    this.required ? this.inputAutocomplete.disable() : this.inputAutocomplete.enable();
  }

  toggleHidden(){
    !this.hidden ? this.inputAutocomplete.hidden = true : this.inputAutocomplete.hidden = false;
  }

  clear(){
    this.inputAutocomplete.setValue('');
  }


  ///////////////////////////////////////////////////////////////
  // Api para traer datos del servicio REST
  //////////////////////////////////////////////////////////////

  autocompleteChange(value){
    
    if(value && value.length > 4){
      let url = 'https://gorest.co.in/public-api/users?first_name=';
      this.autocompleteLoading = true;
      this.autocompleteService.getItems(`${url}${value}`).subscribe( (res: object[]) => {

        console.log('res', res);
        if(res && res['result'].length > 0){
          this.inputAutocomplete.setItems(res['result']);
        }else{
          this.inputAutocomplete.setItems([]);
        }
        
        this.autocompleteLoading = false;
      },
      error => {
        this.autocompleteLoading = false;
      });

    }
  }

  blurInput(event){
    // onsole.log('blur event', event);
  }

  


}
