import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { UserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';
import { LoginData } from './auth.model';
import { Response } from 'express';



@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService) { }

	@Post('login')
	login(@Body() data: LoginData, @Res() res: Response): Response<UserDto> {
		const user = this.authService.login(data.email, data.password);
		console.log('AuthController -> constructor -> user', user);
		if (!user) {
			console.log('AuthController -> constructor -> user', user);
			return res.status(HttpStatus.NOT_FOUND).send();
		}
		return res.send(user);
	}
}
