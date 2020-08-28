import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthencationService } from '../shared/authencation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	logInForm: FormGroup;
	errorMessage = 'AuthenTication fail';
	displayError = false;
	subscriptions: Subscription[] = [];


	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private authService: AuthencationService,
		private snackBar: MatSnackBar
	) { }

	ngOnInit(): void {
		this.logInForm = this.formBuilder.group({
			email: ['test@test.fr', [Validators.email, Validators.required]],
			password: ['12345', [Validators.required]]
		});

		const isloggedSubs = this.authService.isLogged()
			.subscribe((logged) => {
				if (logged) {
					this.router.navigate(['/account/list']);
				}
			});
		this.subscriptions.push(isloggedSubs);
	}
	ngOnDestroy(): void {
		this.subscriptions.forEach(subs => subs.unsubscribe());
	}

	public onSubmit(): void {
		this.authService.login(this.logInForm.value)
			.subscribe(
				res => {
					if (res) {
						this.authService.setLocalStorage(res);
						this.router.navigateByUrl('/account/list');
						return;
					}
				},
				error => this.setError()
			);
	}

	public setError(): void {
		this.logInForm.reset({});
		this.displayError = true;
		this.displayMessage('Authentication fail. Please retry');
	}

	public displayMessage(message: string): void {
		this.snackBar.open(message, '', {
			duration: 2000,
		});
	}


}
