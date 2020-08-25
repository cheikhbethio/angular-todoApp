import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		AccountRoutingModule,
		MaterialModule
	]
})
export class AccountModule { }
