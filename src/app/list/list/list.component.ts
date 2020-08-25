import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/model/task';
import { ListService } from '../list.service';



@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	tasksList: Task[] = [];
	messageWhenNoTask = 'no task registred';

	constructor(private listService: ListService) { }

	ngOnInit(): void {
		this.tasksList = this.listService.getAllTasks();
	}


}
