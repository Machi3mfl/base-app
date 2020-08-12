import { Component, OnInit } from '@angular/core';
import { FormTableControlOptions, CoreFormTableControl, SimpleHttpClientService } from 'ngx-core-library';



@Component({
  selector: 'app-form-table-example',
  templateUrl: './form-table-example.component.html',
  styleUrls: ['./form-table-example.component.scss']
})
export class FormTableExampleComponent implements OnInit {

  formTableOptions: FormTableControlOptions;
  formTableControl: CoreFormTableControl;
  loaded: boolean = false;

  constructor(private httpService: SimpleHttpClientService) { 
    this.formTableOptions = {
      label: 'Riesgos',
      editable: true,
      selectable: true,
      control: {
          type: 'table',
          items: {
              id: {
                  label: 'Riesgo',
                  editable: false,
                  control: {
                      type: 'text',
                  }
              },
              first_name: {
                  label: 'Estado',
                  editable: false,
                  cellStyle: 'text-left',
                  control: {
                      type: 'text',
                  }
              },
              last_name: {
                  label: 'Descripción',
                  cellStyle: 'text-left',
                  editable: false,
                  control: {
                      type: 'text',
                  }
              },
              email: {
                  label: 'Prima',
                  editable: false,
                  cellStyle: 'text-right',
                  control: {
                      type: 'text',
                  }
              },
              status: {
                label: 'Suma Asegurada',
                cellStyle: 'text-right',
                editable: false,
                control: {
                    type: 'text',
                }
            },
              /*acciones: {
                  label: 'Ver Detalle',
                  editable: false,
                  control: {
                      type: 'custom_action',
                      icon: 'group'
                  }
              }*/
          },
          defaultData: [],
          columns: ['id', 'first_name', 'last_name', 'email', 'status'],
          
      }
    }

    this.formTableControl = new CoreFormTableControl(this.formTableOptions);

    this.loaded = false;
    this.httpService.get('https://gorest.co.in/public-api/users').subscribe( data => {
      // console.log('data', data);
      if(data && data['result']){
        this.formTableControl.data = data['result'];
      }
      this.loaded = true;
    },
    error => {
      this.loaded = true;
    });
  }

  ngOnInit(): void {
  }

}
