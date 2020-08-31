import { Controller, Get, Param, Body, Put, Post, Delete } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('api/tasks')
export class TaskController {
	constructor(private taskService: TaskService) {
	}

	@Get('')
	getAll(): TaskDto[] {
		return this.taskService.findAll();
	}

	@Get(':id')
	getOneUser(@Param('id') id: string): TaskDto {
		return this.taskService.findOne(id);
	}

	@Put(':id')
	updateOne(@Param('id') id: string, @Body() body: TaskDto): TaskDto {
		body.id = id;
		return this.taskService.update(body);
	}

	@Post('')
	create(@Body() data: TaskDto): TaskDto {
		return this.taskService.post(data);
	}

	@Delete(':id')
	delete(@Param('id') id: string): void {
		return this.taskService.delete(id);
	}

	@Get('users/:id')
	getAllForAUser(@Param('id') id: string): TaskDto[] {
		return this.taskService.findAllForUser(id);
	}
}
