import { Injectable } from '@nestjs/common';
import { TaskDto, UserTaskDto } from './task.dto';

@Injectable()
export class TaskService {
	tasksList: TaskDto[] = [
		{
			id: '1',
			description: 'drouss',
			date: new Date('2020-01-01'),
			done: false
		},
		{
			id: '2',
			description: 'café',
			date: new Date('2020-01-01'),
			done: false
		},
		{
			id: '3',
			description: 'sport',
			date: new Date('2020-08-01'),
			done: false
		},
	];


	usersTasks: UserTaskDto[] = [
		{
			userId: '1',
			taskId: '1'
		},
		{
			userId: '1',
			taskId: '3'
		},
		{
			userId: '2',
			taskId: '3'
		}
	];

	findAll(): TaskDto[] {
		return this.tasksList;
	}

	findOne(id: string): TaskDto {
		return this.tasksList[id];
	}

	post(data: TaskDto): TaskDto {
		data.id = String(this.tasksList.length + 1);
		this.tasksList.push({ ...data });
		return data;
	}

	update(data: TaskDto): TaskDto {
		const index = this.tasksList.findIndex(user => user.id === data.id);
		this.tasksList[index] = { ...this.tasksList[index], ...data };
		return this.tasksList[index];
	}

	delete(id: string): void {
		const index = this.tasksList.findIndex(user => user.id === id);
		this.tasksList.splice(index, 1);
	}

	findAllForUser(userId: string): TaskDto[] {
		const userTaskId: UserTaskDto[] = this.usersTasks.filter(task => task.userId === userId);
		return this.tasksList.reduce((memo, task) => {
			const foundTask: UserTaskDto = userTaskId.find((link: UserTaskDto) => link.taskId === task.id);
			if (foundTask) {
				memo.push(task);
			}
			return memo;
		}, []);
	}



}
