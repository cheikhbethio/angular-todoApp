import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'list',
				loadChildren: () => import('../list/list.module').then(mod => mod.ListModule),
			},
			{
				path: 'stats',
				loadChildren: () => import('../stat/stat.module').then(mod => mod.StatModule),
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }
