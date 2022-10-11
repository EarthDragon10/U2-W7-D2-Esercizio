class Person {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}

	showAgeComparison(person) {
		if (this.age > person.age) {
			console.log(`${this.name} é piú vecchio/a di ${person.name}`);
		} else {
			console.log(`${person.name} é piú vecchio/a di ${this.name}`);
		}
	}
}

const p1 = new Person("Laura", "Nola", 44);
const p2 = new Person("Francesca", "Afragola", 29);
const p3 = new Person("Stefania", "boh", 32);

console.log(p3.showAgeComparison(p1));
