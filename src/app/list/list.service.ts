import { Injectable } from '@angular/core';
import { Task } from '../shared/model/task';

@Injectable({
	providedIn: 'root'
})
export class ListService {
	list: Task[] = [
		new Task('1', 'desc aaa', new Date(), false),
		new Task('2', 'desc bbb', new Date(), true),
		new Task('3', 'desc ccc', new Date(), false),
		new Task('4', 'desc ddd', new Date(), false),
	];
	constructor() { }

	public getAllTasks(): Task[] {
		return this.list;
	}
}
