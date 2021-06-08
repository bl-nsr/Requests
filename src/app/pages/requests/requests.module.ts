import { NgModule } from '@angular/core';

import { RequestsRoutingModule } from './requests-routing.module';

import { RequestsComponent } from './requests.component';


@NgModule({
  imports: [RequestsRoutingModule],
  declarations: [RequestsComponent],
  exports: [RequestsComponent]
})
export class RequestsModule { }
