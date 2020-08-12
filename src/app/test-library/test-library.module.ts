import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCoreLibraryModule } from 'ngx-core-library';

// componentes
import { FormControlsExampleComponent } from './form-controls-example/form-controls-example.component';
import { TableExampleComponent } from './table-example/table-example.component';


import { TestRoutingModule } from './test-library-routing.module';
import { FormTableExampleComponent } from './form-table-example/form-table-example.component';
import { FormExampleComponent } from './form-example/form-example.component';


@NgModule({
  declarations: [
    FormControlsExampleComponent,
    TableExampleComponent,
    FormTableExampleComponent,
    FormExampleComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    NgxCoreLibraryModule,
    TestRoutingModule
  ]
})
export class TestLibraryModule { }
