"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModule_1 = __importDefault(require("./userModule"));
console.log('Typescript2');
let peter = {
    name: 'Peter',
    surname: ''
};
let myLock = {
    x: 10,
    y: 20
};
let myLock2 = {
    x: 101,
    y: 201
};
console.log(myLock2);
console.log(myLock);
console.log(peter);
let user = new userModule_1.default(1, 'Ivan', 'Tald', 1971, [[1, 'guitar'], [2, 'violin']]);
user.id = 10;
console.log(user.id);
