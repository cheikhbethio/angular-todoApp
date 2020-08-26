import { Task } from './model';
import * as moment from 'moment';

export const TASKS: Task[] = [
	{
		id: 1,
		description: 'dodo',
		date: moment().toDate(),
		done: false
	},
	{
		id: 2,
		description: 'khassida',
		date: moment().toDate(),
		done: false
	}
];
