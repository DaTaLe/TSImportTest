import User from "userModule"

console.log('Typescript2' as String);

interface user{
    name: String,
    surname: String;
}

type coord = {
    x: number,
    y: number
}

let peter: user = {
    name: 'Peter',
    surname: ''
};

let myLock: coord = {
    x: 10,
    y: 20
}

let myLock2: coord = {
    x: 101,
    y: 201
}

console.log(myLock2)
console.log(myLock)

console.log(peter);

let user: User = new User(1,'Ivan','Tald',1971, [[1,'guitar'],[2, 'violin']]);
user.id = 10

console.log(user.id);
