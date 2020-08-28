import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListRoutingModule } from './list-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogEditingComponent } from './dialog-editing/dialog-editing.component';


@NgModule({
	declarations: [ListComponent, DialogEditingComponent],
	imports: [
		ListRoutingModule,
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		FormsModule
	],
	entryComponents: [DialogEditingComponent]
})
export class ListModule { }
