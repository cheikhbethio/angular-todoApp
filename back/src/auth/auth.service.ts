import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {

	constructor(private userService: UserService) { }

	login(email: string, password: string): UserDto {
		return this.userService.userslist.find(user => user.email === email && user.password === password);
	}
}
