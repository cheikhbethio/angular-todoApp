

import * as express from 'express';
import { Application } from 'express';
import { loginUser } from './controllers/users/auth.route';
import { getAllTasks, createTask, updateTask, deleteTask, getTaskById } from './controllers/tasks/services';
import * as  morgan from 'morgan';

const bodyParser = require('body-parser');



const app: Application = express();
app.use(morgan('combined'));

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/tasks').get(getAllTasks);

app.route('/api/tasks').post(createTask);

app.route('/api/tasks/:id').put(updateTask);

app.route('/api/tasks/:id').delete(deleteTask);

app.route('/api/tasks/:id').get(getTaskById);



const httpServer: any = app.listen(3000, () => {
	console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});




