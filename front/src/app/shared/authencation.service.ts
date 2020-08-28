import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, } from 'rxjs';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class AuthencationService implements CanActivate {

	constructor(
		private router: Router,
		private httpClient: HttpClient
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.isLogged();
	}

	public isLogged(): Observable<boolean> {
		const data = this.getLocalStorage();
		const isLogged = data ? true : false;
		return of(isLogged);
	}

	public login(data): Observable<User> {
		return this.httpClient.post<User>('/api/login', data);
	}

	public logOut(): void {
		localStorage.removeItem('todoApp');
		this.router.navigate(['/login']);
	}

	public setLocalStorage(data): void {
		localStorage.setItem('todoApp', JSON.stringify(data));
	}
	public getLocalStorage(): any {
		return JSON.parse(localStorage.getItem('todoApp'));
	}

}
