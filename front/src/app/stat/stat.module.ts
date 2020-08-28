import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat/stat.component';
import { StatRoutingModule } from './stat-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


@NgModule({
	declarations: [StatComponent],
	imports: [
		CommonModule,
		StatRoutingModule,
		MaterialModule,
		FlexLayoutModule,
	]
})
export class StatModule { }
