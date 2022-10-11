const table = document.getElementById("table");
const errorDisplay = document.getElementById("error-display");
const displayPagination = document.getElementById("display-pagination");

class PersonalData {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
}

let archivePersonalData = [];

const createAndInsertElement = () => {
	let nameInput = document.getElementById("name").value;
	let surnameInput = document.getElementById("surname").value;
	let dateBirthdayInput = document.getElementById("date-birthday").value;

	if (nameInput === "" || surnameInput === "" || dateBirthdayInput === "") {
		errorDisplay.innerHTML = `<div class="error-box">Error</div>`;
	} else {
		errorDisplay.innerHTML = "";

		let InputPersonalData = new PersonalData(
			nameInput,
			surnameInput,
			dateBirthdayInput
		);

		archivePersonalData.push(InputPersonalData);

		let newDiv = document.createElement("div");
		newDiv.classList.add("box");
		newDiv.innerText += `${InputPersonalData.name} ${InputPersonalData.surname} ${InputPersonalData.age}`;
		table.appendChild(newDiv);

		// console.log(archivePersonalData);
	}

	if (archivePersonalData.length > 10) {
		let newArrToDisplay = new Pagination(archivePersonalData, 10);
		newArrToDisplay.setPaginationList();
	}
};

const resetArchiveData = () => {
	table.innerHTML = "";
	errorDisplay.innerHTML = "";
};

class Pagination {
	constructor(items, pageSize) {
		this.items = items;
		this.pageSize = pageSize;
	}

	setPaginationList = () => {
		/*
    Devo scrivere una logica tale che, se l'array ha piú 10 elementi, mi visualizzi in un'altra 
    pagina, dall'undicesimo fino al ventesimo elemento... e cosí via

    */
		table.innerHTML = "";

		this.itemToDisplay = archivePersonalData.slice(
			this.pageSize,
			archivePersonalData.length + 1
		);

		for (let i = 0; i < this.itemToDisplay.length; i++) {
			let newDiv = document.createElement("div");
			newDiv.classList.add("box");

			newDiv.innerText = `${this.itemToDisplay[i].name} ${this.itemToDisplay[i].surname} ${this.itemToDisplay[i].age}`;
			table.appendChild(newDiv);
		}

		if (archivePersonalData.length === 20) {
			table.innerHTML = "";
			this.itemToDisplay_2 = archivePersonalData.slice(
				this.pageSize + 10,
				archivePersonalData.length + 1
			);
			// let newDiv_2 = document.createElement("div");
			// newDiv_2.classList.add("box");
			for (let i = 0; i < this.itemToDisplay_2.length; i++) {
				// let newDiv = document.createElement("div");
				// newDiv.classList.add("box");

				newDiv.innerText = `${this.itemToDisplay_2[i].name} ${this.itemToDisplay_2[i].surname} ${this.itemToDisplay_2[i].age}`;
				table.appendChild(newDiv);
			}
		}

		console.log(itemToDisplay);
	};
}
