import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Angular de Javier Diaz';
  constructor(
    private taskService: TaskService
  ){}

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(todos => {
      var apellido = document.getElementById("apellido");
      document.getElementById('apellido').setAttribute('value', String(todos['data'][0]['apellido']));
      console.log(String(todos['data'][0]['apellido']))
    
      
    });
  }
}
