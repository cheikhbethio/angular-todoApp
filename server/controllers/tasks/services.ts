import { Request, Response } from 'express';
import { TASKS } from './data';
import * as moment from 'moment';

export function createTask(req: Request, res: Response): any {

  console.log('Creating new Task ...');

  const newTask = {
    id: TASKS.length + 1,
    ...req.body,
    date: moment().toDate()
  };

  TASKS.push(newTask);

  setTimeout(() => {
    res.status(200).json(newTask);
  }, 500);
}



export function deleteTask(req: Request, res: Response): any {

  const id = Number(req.params.id);

  const taskIndex = TASKS.findIndex(task => task.id === id);

  TASKS.splice(taskIndex, 1);

  setTimeout(() => {

    res.status(200).json({ id });

  }, 500);

}



export function getAllTasks(req: Request, res: Response): any {

  console.log('Retrieving courses data ...');

  setTimeout(() => {
    return res.status(200).json({ payload: TASKS });
  }, 500);
}


export function getTaskById(req: Request, res: Response): any {

  const id = Number(req.params.id);

  const foundTask = TASKS.find(task => task.id === id);

  setTimeout(() => {

    res.status(200).json(foundTask);

  }, 500);


}


export function updateTask(req: Request, res: Response): any {

  const id = Number(req.params.id);
  const changes = req.body;
  let taskToUpdate = TASKS.find(task => task.id === id);

  taskToUpdate = {
    ...TASKS[id],
    ...changes
  };

  setTimeout(() => {
    res.status(200).json(TASKS[id]);
  }, 500);

}

