import { Injectable } from '@angular/core';
import { Task } from '../shared/model/task';
import { Stat } from '../shared/model/stat';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ListService {

	constructor(
		private httpClient: HttpClient
	) { }

	public deleteAll(tasks): Observable<any> {
		return forkJoin(
			tasks.map(task => this.httpClient.delete(`/api/tasks/${task.id}`))
		);
	}

	public getAllTasks(): Observable<Task[]> {
		return this.httpClient.get<Task[]>('/api/tasks/')
			.pipe(map((result: any) => result.payload));
	}

	public deleteTask(id): Observable<any> {
		return this.httpClient.delete(`/api/tasks/${id}`);
	}

	public editTask(data): Observable<Task> {
		return this.httpClient.put<Task>(`/api/tasks/${data.id}`, data);
	}

	public add(data: Task): Observable<Task> {
		console.log('ListService -> data', data);
		return this.httpClient.post<Task>('/api/tasks', data);
	}

	public getStats(): Observable<Stat> {
		return this.httpClient.get<Task[]>('/api/tasks/')
			.pipe(
				map((result: any) => {
					const datas = result.payload;
					return {
						total: datas.length,
						done: datas.filter(task => task.done).length,
						undone: datas.filter(task => !task.done).length,
						past: datas.filter(task => task.date < new Date()).length
					};
				})
			);
	}
}
