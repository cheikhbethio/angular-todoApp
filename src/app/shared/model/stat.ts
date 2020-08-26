import { Task } from '../../../../server/controllers/tasks/model';

export interface Stat {
	total: number;
	done: number;
	undone: number;
	past: number;
}
