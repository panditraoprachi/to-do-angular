import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  arrNew:any[]=[];
  addTask(task:any){
    this.arrNew.push({id:this.arrNew.length,name:task});
    console.log(this.arrNew);
  }
  deleteTask(id:number){
    this.arrNew=this.arrNew.filter(index=>index.id!==id);
  }
  deleteAll(){
    this.arrNew=[];
  }
  // data=[{task:'Wash Laundry'},
  //       {task:'Take a walk with dog'}]
}
