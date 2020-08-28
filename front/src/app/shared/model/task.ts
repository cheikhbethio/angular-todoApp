export class Task {
	id?: number;
	description: string;
	date: Date;
	done: boolean;
	/**
	 *
	 */
	constructor(id, description, date, done) {
		this.id = id;
		this.description = description;
		this.date = date;
		this.done = done;
	}
}
