let poeni = 20;

function racunanjePoeni(ocene) {
	if (poeni >= 90) {
		console.log("Odličan");
	} else if (poeni >= 70) {
		console.log("Dobar");
	} else if (poeni >= 50) {
		console.log("Dovoljan");
	} else {
		console.log("Nedovoljan");
	}
}

racunanjePoeni(poeni);

let tim = [
	{ ime: "Marko", poeni: 95 }, // tim[0] ← objekat
	{ ime: "Ana", poeni: 82 }, // tim[1] ← objekat
	{ ime: "Petar", poeni: 78 }, // tim[2] ← objekat
];

function ispisiTim(tim) {
	for (let i = 0; i < tim.length; i++) {
		console.log(tim[i].ime + ": " + tim[i].poeni + " poena");
		console.log(`${tim[i].ime}  : ${tim[i].poeni} poena`);
	}
}

ispisiTim(tim);
