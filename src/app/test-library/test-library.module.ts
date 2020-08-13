import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TestRoutingModule } from './test-library-routing.module';

import { NgxCoreLibraryModule } from 'ngx-core-library';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


// componentes
import { FormControlsExampleComponent } from './form-controls-example/form-controls-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormControlFeaturesComponent } from './form-control-features/form-control-features.component';
import { CustomFormControlsComponent } from './custom-form-controls/custom-form-controls.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    FormControlsExampleComponent,
    TableExampleComponent,
    FormExampleComponent,
    FormControlFeaturesComponent,
    CustomFormControlsComponent
  ],
  providers: [
    
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    NgxCoreLibraryModule
  ]
})
export class TestLibraryModule { }
