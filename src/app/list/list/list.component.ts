import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../shared/model/task';
import { ListService } from '../list.service';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditingComponent } from '../dialog-editing/dialog-editing.component';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
	tasksList: Task[] = [];
	messageWhenNoTask = 'no task registred';
	messageWhenInvalidAdding: string = undefined;
	subscriptionList: Subscription[] = [];
	taskDescriton = new FormControl('', [Validators.minLength(5), Validators.required]);

	constructor(
		private listService: ListService,
		private dialog: MatDialog,
	) { }

	ngOnInit(): void {
		this.subscriptionList.push(
			this.listService.getAllTasks()
				.subscribe(res => this.tasksList = res),
			this.taskDescriton.valueChanges
				.subscribe(() => this.messageWhenInvalidAdding = this.taskDescriton.invalid ?
					'required and minLength = 5' : undefined
				)
		);

	}

	ngOnDestroy(): void {
		this.subscriptionList.forEach(subs => subs.unsubscribe());
	}

	public deleteAll(): void {
		this.listService.deleteAll(this.tasksList)
			.subscribe(() => this.tasksList = []);
	}

	public add(): void {
		console.log('ListComponent -> add -> this.taskDescriton', this.taskDescriton);
		if (this.taskDescriton.invalid) {
			return;
		}
		const data = new Task(undefined, this.taskDescriton.value, new Date(), false);
		const addSubscription = this.listService.add(data)
			.subscribe(res => {
				this.tasksList.push(res);
				this.taskDescriton.setValue('');
			});
		this.subscriptionList.push(addSubscription);
	}

	public deleteTask(id: number): void {
		const deleteSubscription = this.listService.deleteTask(id)
			.subscribe(result => {
				this.tasksList = this.tasksList.filter(task => task.id !== id);
			});
		this.subscriptionList.push(deleteSubscription);
	}

	public editTask(id: number): void {
		const taskToUpdate = this.tasksList.find(task => task.id === id);
		const dialogRef = this.dialog.open(DialogEditingComponent, {
			width: '500px',
			data: { task: taskToUpdate }
		});

		dialogRef.afterClosed().subscribe(data => {
			const editSubscription = this.listService.editTask(data)
				.subscribe(result => {
					let editedTask = this.tasksList.find(task => task.id === id);
					editedTask = result;
				});
			this.subscriptionList.push(editSubscription);
		});


	}

}
