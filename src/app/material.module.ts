import {NgModule} from '@angular/core';

import { 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule 
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule 
  ]
})
export class CustomMaterialModule {}