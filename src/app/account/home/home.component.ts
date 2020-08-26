import { Component, OnInit } from '@angular/core';
import { AuthencationService } from 'src/app/shared/authencation.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private authService: AuthencationService
	) { }

	ngOnInit(): void {
	}

	public logOut(): void {

		this.authService.logOut();
	}

}
