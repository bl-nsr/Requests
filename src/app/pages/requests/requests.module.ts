import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  imports: [RequestsRoutingModule, NzGridModule, NzCardModule, NzImageModule, NzInputNumberModule, NzSliderModule, FormsModule, NzButtonModule],
  declarations: [RequestsComponent],
  exports: [RequestsComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestsModule { }
