import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormControlsExampleComponent } from './form-controls-example/form-controls-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { FormTableExampleComponent } from './form-table-example/form-table-example.component';
import { FormExampleComponent } from './form-example/form-example.component';

const routes: Routes = [ 
  {
    path: '',
    children: [
      { path: 'form-controls-example', component: FormControlsExampleComponent },
      { path: 'table-example', component: TableExampleComponent },
      { path: 'form-table-example', component: FormTableExampleComponent },
      { path: 'form-example', component: FormExampleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
