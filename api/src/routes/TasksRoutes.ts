import type { Express } from 'express';
import { index, store, show, update, destroy } from '../controllers/TasksController';

export default function(app: Express){
    app.route('/tasks')
        .get(index)
        .post(store)
    app.route('/tasks/:id')
        .get(show)
        .put(update)
        .patch()
        .delete(destroy)
}