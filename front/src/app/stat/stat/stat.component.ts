import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatService } from '../stat.service';
import { ListService } from 'src/app/list/list.service';
import { Stat } from 'src/app/shared/model/stat';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-stat',
	templateUrl: './stat.component.html',
	styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit, OnDestroy {
	stats: Stat = {
		total: 0,
		done: 0,
		undone: 0,
		past: 0
	};
	subscriptions: Subscription[] = [];

	constructor(
		private statservice: StatService,
		private listService: ListService
	) { }

	ngOnInit(): void {
		this.getStats();
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subs => subs.unsubscribe());
	}

	public getStats(): void {
		const subs = this.listService.getStats()
			.subscribe(result => this.stats = result);
		this.subscriptions.push(subs);
	}

}
