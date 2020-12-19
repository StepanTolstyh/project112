export interface MyWorker{
    name:string;
    surname:string;
    type:number;
    id?:number;
}

export enum MyWorkerType{
    programmer,designer,copywriter,manager,
}
export let MyWorkerDataBase: MyWorker[] = [
    {id:1, name: 'Иван', surname:'Петров', type: 0},
    {id:2, name: 'Лена', surname:'Головач', type: 1},
    {id:3, name: 'Жижа', surname:'Смирнов', type: 2},
    {id:4, name: 'Андрей', surname:'Бубен', type: 3},
]