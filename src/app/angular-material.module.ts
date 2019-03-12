import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule
  ]
})
export class AngularMaterialModule {
  constructor(
    public matIconRegistry: MatIconRegistry,
  ) {
    matIconRegistry.registerFontClassAlias('fa');
  }
}
