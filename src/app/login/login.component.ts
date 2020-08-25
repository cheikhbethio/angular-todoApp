import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthencationService } from '../shared/authencation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	logInForm: FormGroup;
	errorMessage = 'AuthenTication fail';
	displayError = false;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private authService: AuthencationService,
		private snackBar: MatSnackBar
	) { }

	ngOnInit(): void {
		this.logInForm = this.formBuilder.group(
			{
				email: ['test@test.fr', [Validators.email, Validators.required]],
				password: ['12345', [Validators.required]]
			}
		);
	}

	public onSubmit(): void {
		console.log('LoginComponent -> onSubmit -> this.logInForm', this.logInForm);
		this.authService.login(this.logInForm.value)
			.subscribe(
				res => {
					console.log('LoginComponent -> onSubmit -> res', res);
					if (res) {
						this.authService.setLocalStorage(res);
						this.router.navigateByUrl('/account');
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
