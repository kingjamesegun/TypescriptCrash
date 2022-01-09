let numid: number = 5;
let company: string = 'KingJames';
let isPublished: boolean = true;
let x: any = 'Hello';

let num: number[] = [1, 2, 3, 4, 4];
let arr: any[] = [1, 2, 3, 'Hello'];

arr.push(false);

// Tuple
let person: [number, string, boolean] = [1, 'James', true];
let employee: [number, string][];

employee = [
	[1, 'James'],
	[2, 'Imole'],
	[3, 'Tolu'],
];

// Union
let pid: string | number = 22;

pid = 'James';

// Enum
enum Direction1 {
	Up,
	Down,
	Left,
	Right,
}

console.log(Direction1.Up);

// Objects
type User = {
	id: number;
	name: string;
};
const user: User = {
	id: 1,
	name: 'James',
};

// Type Assertion Asserting another type
let cid: any = 1;
let customerId = <number>cid;
let customerRegistered = cid as boolean;

cid = false;
// customerId = true
customerRegistered = true;

function addNum(x: number, y: number): number {
	return x + y;
}

console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
	console.log(message);
}

log('Hello');

// Interfaces
interface UserInterface {
	id: number;
	name: string;
}
const user1: UserInterface = {
	id: 1,
	name: 'James',
};

// cant use inteface with primitive or unions

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}
// class
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		// runs when the class is initiated outside
		this.id = id;
		this.name = name;
	}
	register() {
		return `${this.name} is now registered`;
	}
}

const brad = new Person(1, 'James');

console.log(brad.register());

// extending a class
class Employee extends Person{
    position : string;

    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position = position
    }
}


const emp = new Employee(3, "Shawn", "Developer");
console.log(emp);
console.log(emp.position);
