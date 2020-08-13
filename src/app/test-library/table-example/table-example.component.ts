import { Component, OnInit } from '@angular/core';
import { ControlOptions, CoreFormControl, SimpleHttpClientService, CoreTableControl } from 'ngx-core-library';
import { TableColumns } from 'ngx-core-library';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {

  tableColumns: TableColumns;
  tableControl: CoreTableControl;
  loading: boolean;

  constructor(private httpService: SimpleHttpClientService) { }

  ngOnInit(): void {
    this.tableColumns = {
      id: { label: '#', visible: true },
      first_name: { label: 'Nombre', visible: true  },
      last_name: { label: 'Apellido', visible: true  },
      gender: { label: 'Genero', visible: true  },
      email: { label: 'Email', visible: true  },
      phone: { label: 'Telefono', visible: true  },
      website: { label: 'Sitio Web', visible: true  },
      address: { label: 'Dirección', visible: true  },
      status: { label: 'Estado', visible: true  },
    }
    

    this.tableControl = new CoreTableControl(this.tableColumns);
  
  

    this.loading = true;
    this.httpService.get('https://gorest.co.in/public-api/users').subscribe( data => {
      // console.log('data', data);
      if(data && data['result']){
        this.tableControl.data = data['result'];
      }
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }



}
