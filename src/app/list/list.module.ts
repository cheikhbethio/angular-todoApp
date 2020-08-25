import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListRoutingModule } from './list-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [ListComponent],
	imports: [
		ListRoutingModule,
		CommonModule,
		MaterialModule,
		FlexLayoutModule
	]
})
export class ListModule { }
