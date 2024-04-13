import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Components/Tasks/task';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  userToken!: string;
  email!: string;
  constructor(private _HttpClient: HttpClient) { }

  userDatabaseCheck() {
    let databaseExist = this._HttpClient.get('https://todo-3dfa9-default-rtdb.firebaseio.com/allData.json');
    return databaseExist
  }

  createUserDatabase() {
    let request = {
      [this.userToken]: { 'user': { 'id': this.userToken, 'email': this.email } }
    };
    this._HttpClient.patch('https://todo-3dfa9-default-rtdb.firebaseio.com/allData.json', request).subscribe()
  }

  createTasks(tasks: Task[]) {
    return this._HttpClient.put(`https://todo-3dfa9-default-rtdb.firebaseio.com/allData/${this.userToken}/tasks.json`, tasks);
  }

  getallTasks() {
    return this._HttpClient.get<Task[]>(`https://todo-3dfa9-default-rtdb.firebaseio.com/allData/${this.userToken}/tasks.json`);
  }

  getTask(taskIndex: number) {
    return this._HttpClient.get<Task>(`https://todo-3dfa9-default-rtdb.firebaseio.com/allData/${this.userToken}/tasks/${taskIndex}.json`);
  }

  editTask(i: number, task: Partial<Task>) {
    const url = `https://todo-3dfa9-default-rtdb.firebaseio.com/allData/${this.userToken}/tasks/${i}.json`;
    return this._HttpClient.patch(url, task);
  }

  deleteTask(i: number) {
    const url = `https://todo-3dfa9-default-rtdb.firebaseio.com/allData/${this.userToken}/tasks/${i}.json`;
    return this._HttpClient.delete(url);
  }

  

}
