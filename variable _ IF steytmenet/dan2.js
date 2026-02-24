const godine = 20;
if (godine >= 18) {
	console.log(`Mozes uci u klub`);
} else {
	console.log(`Ne mozes uci u klub`);
}

let para = 1200;

if (para >= 1000) {
	console.log("idemo na more");
} else if (para < 500) {
	console.log("Ostajemo kuci");
} else {
	console.log("idemo u restoran");
}

const imaKartu = true;
const imaLK = true;

if (imaKartu && imaLK) {
	console.log("Moze uci");
} else {
	console.log("Ne moze uci ");
}

let jeVikend = true;
let jePraznik = true;

if (jeVikend || jePraznik) {
	console.log("nema posla ");
} else {
	console.log("Idemo na posao");
}

let imaParaZaKafu = true;

let odluka = imaParaZaKafu ? "Idем na kafu" : "Ne idemo na kafu";
console.log(odluka);

let imaGodina = 20;
let karta = false;

let klub = imaGodina >= 18 && karta ? "mozes uci" : "ne mozes uci";
console.log(klub);

let temperatura = 25;
let jeSumno = false;

let plan = temperatura >= 25 ? "Idemo na plazu" : "ostajemo kod kuce";
console.log(plan);

let mozdaPlaza =
	temperatura >= 30 && !jeSumno
		? "Savrsen dan za plazu"
		: "Mozda neki drugi dan";
console.log(mozdaPlaza);
