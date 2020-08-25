import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat/stat.component';
import { StatRoutingModule } from './stat-routing.module';


@NgModule({
	declarations: [StatComponent],
	imports: [
		CommonModule,
		StatRoutingModule
	]
})
export class StatModule { }
