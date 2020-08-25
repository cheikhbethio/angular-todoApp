import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatComponent } from './stat/stat.component';


const routes: Routes = [
	{
		path: '',
		component: StatComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StatRoutingModule { }
