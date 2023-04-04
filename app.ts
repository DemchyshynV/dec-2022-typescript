// // // // const func = (str: number): Function => {
// // // //     console.log('hello');
// // // //     return () => console.log('aaaa')
// // // // }
// // // //
// // // //
// // // // func(5)
// // // //
// // // // func(1.5)
// // //
// // //
// // // interface IUser<T> {
// // //     name: string;
// // //     age: number;
// // //     status: boolean;
// // //     data: T;
// // // }
// // //
// // // // const user1: IUser<number[]> = {name: 'Max', status: true, age: 15, data: [1, 2, 3,]}
// // // // const user2: IUser<string> = {name: 'Max', status: true, age: 15, data: 'sssss'}
// // // //
// // // // const user3: Partial<IUser<number>> = {name: 'Karina', hhdhdhd: 111}
// // //
// // //
// // // class User {
// // //
// // //     constructor(protected id: number, private name: string, private age: number) {
// // //         this.id = id;
// // //         this.name = name;
// // //         this.age = age;
// // //     }
// // //
// // //     getName() {
// // //         return this.name
// // //     }
// // // }
// // //
// // //
// // // const user = new User(15, 'Max', 15);
// // //
// // // console.log(user.getName());
// // //
// // //
// // interface IShapeActions {
// //     area: () => number;
// //     perimeter: () => number;
// // }
// // interface IGreeting{
// //     print:()=>void;
// // }
// // //
// // class Rectangle implements IShapeActions, IGreeting {
// //     constructor(private a: number, private b: number) {
// //     }
// //
// //     print(): void {
// //         console.log('hello');
// //     }
// //
// //     area(): number {
// //         return this.a * this.b
// //     }
// //
// //     perimeter(): number {
// //         return (this.a + this.b) * 2
// //     }
// //
// // }
// //
// // const rectangle = new Rectangle(2,3);
// // rectangle.print()
// // //
// // // class Triangle implements IShapeActions {
// // //     constructor(private a: number, private b: number, private c: number) {
// // //     }
// // //
// // //     area(): number {
// // //         return 88
// // //     }
// // //
// // //     perimeter(): number {
// // //         return this.c + this.c + this.b
// // //     }
// // //
// // // }
// // // Triangle.area()
// // //
// // // const shapes: IShapeActions[] = [
// // //     new Triangle(1, 2, 3),
// // //     new Rectangle(3, 6),
// // //     new Triangle(2, 3, 5)
// // // ]
// // //
// // // for (let shape of shapes) {
// // //     console.log(shape.area());
// // //     console.log(shape.perimeter());
// // // }
// // //
// // // console.log('kjsdhfkshdfj');
// //
// //
// // console.log('hello');
// //
//
//
// const asd = () => {
//     return 18
// }
//
// // type MyNumber = number|string;
// //
// // const asdffff:MyNumber = tru
//
//
// // type MyFuncType = ReturnType<typeof asd>
// //
// // const g:MyFuncType = 'dd'
//
//


import {userService} from './services/user.service';

// userService.getAll().then(value => value.data).then(users => {
//     for (let user of users) {
//         console.log(user.email);
//     }
// })

// const start = async ()=> {
//     const res = await userService.getAll();
//     const users = res.data;
//     for (let user of users) {
//
//     }

// }
// const asdf = (id: number): void => {
//     console.log(id);
// }
//
// asdf('ssss')


enum DaysOfWeek{
    MON=10,
    TUE,
    WED

}

console.log(DaysOfWeek.MON);
