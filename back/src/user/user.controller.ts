import { Controller, Get, Param, Body, Put, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('api/users')
export class UserController {
	constructor(private userService: UserService) {
	}

	@Get('')
	getAllUsers(): UserDto[] {
		return this.userService.findAll();
	}

	@Get(':id')
	getOneUser(@Param('id') id: string): UserDto {
		return this.userService.findOne(id);
	}

	@Put(':id')
	updateOne(@Param('id') id: string, @Body() body: UserDto): UserDto {
		body.id = id;
		return this.userService.update(body);
	}

	@Post('')
	create(@Body() data: UserDto): UserDto {
		return this.userService.post(data);
	}

	@Delete(':id')
	delete(@Param('id') id: string): void {
		return this.userService.delete(id);
	}
}
