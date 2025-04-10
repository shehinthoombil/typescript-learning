// infer types(implicit type)

// let user = "shehin"
// let sub = 49
// sub = "shehin"

//defining types (explicit type)

// let userName: string = "Shehin";
// let subscribers: number = 30000;
// let isSubscribed: boolean = true;
// let skills: string[] = ["JS", "React.js", "Node.js"];
// let count: number[] = [1, 2, 3, 4];
// let emtyArray: [] = [];
// let object: { name: string, age: number } = {
//     name: "shehin",
//     age: 23,
// }

//interface

// interface details {
//     name:string;
//     age:number;
//     getName: () => void;
// }

// let userDetails:details ={
//     name:"shehin",
//     age:23,
//     getName (){
//         console.log(this.age);  
//     },
// }

//type

// type details = {
//     name: string;
//     age: number;
//     getName: () => void;
// }

// let userDetails: details = {
//     name: "shehin",
//     age: 23,
//     getName() {
//         console.log(this.age);
//     },
// }

//union/optional

// type details = {
//     name: string;
//     age: number;
//     getName?: () => void;
// }

// let userDetails: details = {
//     name: "shehin",
//     age: 23,
//     getName() {
//         console.log(this.age);
//     },
// }  
// let skills: (string | number ) [] = ["JS", "React.js", "Node.js",1,2,3,true];

// //functions

// type GetUserName ={
//     name:string;
//     age:number| string;
// }
// function getUserName(userDetails:details):GetUserName{
//     return {name:userDetails.name, age:userDetails.age}
// }
// getUserName(userDetails);

// //named Types

// type Status = "pending" | "success"| "reject"; 
// let currentStatus:Status = "success"

// //from API
// const response = "pending";

// if(response === "pending"){
//     currentStatus = "pending"
// }

//function overloading

// function add(num1: number, num2: number): number; //use only string and number
// function add(num1: string, num2: string): string;
// function add(num1: any, num2: any): any {
//     return num1 + num2
// }
// console.log(add(2,2));
// console.log(add("2",  "3"))

//generics
// function identity<T>(value: T): T {
//     return value;
//   }

//   console.log(identity<number>(10));  // Output: 10
//   console.log(identity<string>("Hello"));  // Output: "Hello"

//enums
// enum StatusType {
//     PENDING = 1,
//     COMPLETED,
//     FAILED,
// }

// function getStatus(orderID: string, status: StatusType) {
//     console.log(orderID, "==", status);
// }
// getStatus("12345",StatusType.COMPLETED)

//as const
let userName = "shehin" as const;
userName = "shehin";

//any/unknown/never/void/null