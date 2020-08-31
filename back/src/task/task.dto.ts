export class TaskDto {
	id?: string;
	description: string;
	date: Date;
	done: boolean;
}

export class UserTaskDto {
	userId: string;
	taskId: string;
}
