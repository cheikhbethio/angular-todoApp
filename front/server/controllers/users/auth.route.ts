import { Request, Response } from 'express';
import { USERS } from './user.data';
import { User } from './model';




export function loginUser(req: Request, res: Response): any {

	const { email, password } = req.body;
	const user = authenticate(email, password);
	setTimeout(() => {
		return user ? res.status(200).json(user) : res.sendStatus(403);
	}, 500);
}

function authenticate(email: string, password: string): User {
	return USERS
		.find((user: User) => user.email === email && user.password === password);
}

