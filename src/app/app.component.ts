import { Component, ElementRef } from '@angular/core';
import { MyWorker, MyWorkerDataBase, MyWorkerType } from './ui/table-workers/shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[]=MyWorkerDataBase;
  myWorkerType=MyWorkerType;

  getByType(type: number){
return this.workers.filter((worker) =>
worker.type === type);
  }
  onDeleteWorker(id: number){
    let index = this.workers.findIndex((worker)=> worker.id === id);
    if (index!== -1){
      this.workers.splice(index,1);
    }
  } 
  onAddWorker(worker: MyWorker){
    let id = this.workers.length > 0 
    ? this.workers[this.workers.length - 1].id +1 
    :  0;
    worker.id = id;
    this.workers.push(worker);
  }
//   myNumber=10;
// flag = false;
// buttonEnabled = false;
// blockX = 0;
// blockY = 0;
// inputValue = 'test';

// @ViewChild('someInput') someInputName: ElementRef; 
// constructor(){
//   setTimeout(()=>{
// this.buttonEnabled = true;
//   },1500);
// }
//   hello(){
//     return 'ello';
//   }
//   getCoords(e: MouseEvent){
//     this.blockX = e.offsetX;
//     this.blockY=e.offsetY;
//   }
//   getData(elm: HTMLInputElement){
//     console.log(elm.value);
//   }
 }
