import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthencationService implements CanActivate {

	constructor(private httpClient: HttpClient) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		const data = JSON.parse(localStorage.getItem('todoApp'));
		const isLogged = data ? true : false;
		return of(isLogged);
	}

	public login(data): Observable<User> {
		return this.httpClient.post<User>('/api/login', data);
	}

	public setLocalStorage(data): void {
		localStorage.setItem('todoApp', JSON.stringify(data));
	}
}
