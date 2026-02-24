let auto = {
	marka: "BMW",
	boja: "crna",
	godina: 2022,
	nov: false,
};

console.log(auto);
console.log(auto.marka, auto.godina);

auto.boja = "bela";

console.log(auto);

auto.brzina = 200;

console.log(auto);

let telefon = {
	marka: "Iphone",
	model: "14 pro",
	specifikacija: {
		ram: "4gb",
		procesor: "A16",
		memorija: 128 + "GB",
	},
};
console.log(telefon);
console.log(telefon.specifikacija.ram);

let filmovi = [
	{
		name: "Batman",
		godina: 2014,
		ocena: 8,
	},
	{
		name: "Iron Man ",
		godina: 2018,
		ocena: 7,
	},
	{
		name: "Hulk",
		godina: 2014,
		ocena: 9,
	},
];
console.log(filmovi);
console.log(filmovi[0].name);
console.log(filmovi[2].ocena);

let ja = {
	ime: "Jovan",
	godine: 39,
	grad: "Beograd",
	zanimanje: ["JavaSqript", "Webflow", "Tailwind"],
	skils: {
		html: true,
		css: true,
		js: false,
	},
};

console.log(ja);
console.log(ja.zanimanje[1]);
ja.frelance = true;
ja.skils.js = true;

console.log(ja);
