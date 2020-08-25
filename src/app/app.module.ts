import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatTabsModule,
		ReactiveFormsModule,
		FormsModule,
		FlexLayoutModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
	bootstrap: [AppComponent]
})
export class AppModule { }
