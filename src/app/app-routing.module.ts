import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthencationService } from './shared/authencation.service';

const routes: Routes = [
	{
		path: 'login',
		// pathMatch: 'full',
		component: LoginComponent
	},
	{
		path: 'account',
		loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
		canActivate: [AuthencationService]
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/login'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
