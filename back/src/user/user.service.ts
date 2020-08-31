import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
	userslist: UserDto[] = [
		{
			id: '1',
			email: 'aaa@ee.de',
			password: '12345',
			firstName: 'firstName1',
			lastName: 'lastName1'
		},
		{
			id: '2',
			email: 'bbb@bbb.de',
			password: '12345',
			firstName: 'firstName2',
			lastName: 'lastName2'
		},
		{
			id: '3',
			email: 'ccc@cc.de',
			password: '12345',
			firstName: 'firstName3',
			lastName: 'lastName3'
		}
	];

	findAll(): UserDto[] {
		return this.userslist;
	}

	findOne(id: string): UserDto {
		return this.userslist[id];
	}

	post(data: UserDto): UserDto {
		data.id = String(this.userslist.length + 1);
		this.userslist.push({ ...data });
		return data;
	}

	update(data: UserDto): UserDto {
		const index = this.userslist.findIndex(user => user.id === data.id);
		this.userslist[index] = { ...this.userslist[index], ...data };
		return this.userslist[index];
	}

	delete(id: string): void {
		const index = this.userslist.findIndex(user => user.id === id);
		this.userslist.splice(index, 1);
	}


}
