import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(): void {
    this.getAllTasks()
  }
  getAllTasks() {
      var codigo='';
      this.taskService.getAllTasks()
      .subscribe(todos => {            

        for (var i=0;i<todos['data'].length;i++)
        {
            codigo+='<tr>'+
                    '<th scope="row">'+String(todos['data'][i]['cedula'])+'</th>'+
                    '<td>'+String(todos['data'][i]['nombre'])+'</td>'+
                    '<td>'+String(todos['data'][i]['apellido'])+'</td>'+
                    '<td>'+String(todos['data'][i]['correo'])+'</td>'+
                    '</tr>';
        }
        document.getElementById('datos').innerHTML=codigo;      
    });
  }
}
