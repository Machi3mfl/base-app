import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormControlsExampleComponent } from './form-controls-example/form-controls-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormControlFeaturesComponent } from './form-control-features/form-control-features.component';
import { CustomFormControlsComponent } from './custom-form-controls/custom-form-controls.component';


const routes: Routes = [ 
  {
    path: '',
    children: [
      { path: 'form-controls-example', component: FormControlsExampleComponent },
      { path: 'table-example', component: TableExampleComponent },
      { path: 'form-example', component: FormExampleComponent },
      { path: 'control-features', component: FormControlFeaturesComponent },
      { path: 'async-controls', component: CustomFormControlsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
