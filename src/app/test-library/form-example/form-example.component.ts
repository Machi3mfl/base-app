import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { FormOptions, CoreForm } from 'ngx-core-library';
import { Validators } from '@angular/forms';

import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit, AfterViewChecked {

  formOptions: FormOptions;
  form: CoreForm;
  title: string = 'Formulario De Ejemplo';

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formOptions = {
      p_cod_prod: {
        label: 'Productor',
        control: { 
          type: 'autocomplete',
          class: 'col-sm-8',
          path: '/listas/LIST_PAS',
          options: {
            value: 'nombre',
            key: 'codpas',
            description: 'codpas'
          },
          pasteFieldOnSelect: 'nombre',
          defaultValue: '',
        },
        class: 'col-sm-12 col-md-12 col-lg-4'
      },
      p_x_asegurado: {
        label: 'Asegurado',
        control: { 
          type: 'autocomplete',
          class: 'col-sm-8',
          path: '/listas/LIST_ASEGURADOS',
          options: {
            key: 'cod_asegurado',
            value: 'list_val_aseg',
            description: 'cod_asegurado'
          },
          notSelectedItemIsValid: true,
          apiSearchFieldname: 'p_filtro',
          pasteFieldOnSelect: 'cod_asegurado',
          defaultValue: '',
        },
        class: 'col-sm-12 col-md-12 col-lg-4'
      },
      p_fec_siniestro: {
        label: 'Fecha',
        control: {
          type: 'date-range',
          config: {
            max: moment(),
            min: moment().subtract(7,'years')
          }
        },
        class: 'col-sm-12 col-md-12 col-lg-4',
        required: true
      },

      /*
      p_cod_sec: {
        label: 'Sección',
        control: { 
          type: 'select',
          searchable: true,
          path: '/listas/LIST_TIPOS_SECCIONES',
          options: {
            key: 'value',
            value: 'label'
          },
          items: [
            { key: '1', value: 'Sección 1' },
            { key: '2', value: 'Sección 2' },
            { key: '3', value: 'Sección 3' }
          ],
          pasteFieldOnSelect: 'value',
          hasEmptyOption: true
        },
        class: 'col-sm-12 col-md-12 col-lg-2'
      },
      */
      p_o_siniestro: {
        label: 'Nro. Siniestro',
        control: {
            type: 'text',
            config: {
              maxlength: 10
            }
        },
        validators: [
          Validators.minLength(10)
        ],
        class: 'col-sm-12 col-md-12 col-lg-4'
      },
      p_cod_poliza: {
        label: 'Póliza',
        control: {
            type: 'number',
            config: {
              maxlength: 10
            }
        },
        validators: [
          Validators.minLength(10)
        ],
        class: 'col-sm-12 col-md-12 col-lg-4'
      },
      /*
      p_estado: {
        label: 'Estado',
        control: { 
          type: 'select',
          path: '/listas/LIST_ESTADOS_SIN',
          options: {
            key: 'cod_estado',
            value: 'desc_estado'
          },
          pasteFieldOnSelect: 'cod_estado',
          hasEmptyOption: true
        },
        class: 'col-sm-12 col-md-12 col-lg-2',
        // required: true
      },
      */
      /*
      p_tipo_denuncia: {
        label: 'Tipo Denuncia',      
        control: {
          type: 'select',
          items: [
            { key: '1', value: 'EXPRESS' },
            { key: '2', value: 'Tradicional' }          
          ],
          options: {
            value: 'value',
            key: 'key'
          },
          pasteFieldOnSelect: 'key',
          hasEmptyOption: false
        },
        class: 'col-sm-12 col-md-12 col-lg-2',
        // required: true
      },
      */
      p_o_aviso: {
        label: 'Nro. Aviso',
        control: {
          type: 'text',
          config: {
            maxlength: 7
          }
        },
        validators: [
          Validators.minLength(7)
        ],
        class: 'col-sm-12 col-md-12 col-lg-4'
      }    
      
    }

    if(this.formOptions){
      this.form = new CoreForm(this.formOptions);
      console.log('form options', this.formOptions, this.form);
    }else{
      console.error('Form Options must be defined');
    }

    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }



}
