import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  todos;
  empty = false;
  constructor(private todoS: TodoService) { }

  ngOnInit() {
    this.todoS.getToDo().subscribe(data => {
      this.todos = data.map(element => {
        return {
          id: element.payload.doc.id,
          ... element.payload.doc.data(),
        };
      });
      console.log(this.todos);
    });
  }

  search(f) {
    console.log(f.search);
    this.todoS.getToDoByTitle(f.search).subscribe(data => {
      this.todos = data.map(element => {
        return {
          id: element.payload.doc.id,
          ... element.payload.doc.data(),
        };
      });
     if ( this.todos.length === 0) {
          this.empty = true;
     } else {
      this.empty = false;
     }
    });
  }
}
