let gradovi = ["Novi Sad", "Beograd", "Nis", "Kragujevac"];
console.log(gradovi);
console.log(gradovi[0]);
console.log(gradovi[2]);
gradovi.push("Subotica");
console.log(gradovi);
gradovi.pop();
console.log(gradovi);
gradovi.unshift("Valjevo");
console.log(gradovi);
gradovi.shift();
console.log(gradovi);
console.log(gradovi.length);
let imaBeograd = gradovi.includes("Beograd");
console.log(imaBeograd);
let pozicija = gradovi.indexOf("Nis");
console.log(pozicija);
let pozicija2 = gradovi.indexOf("Pariz"); // -1
console.log(pozicija2);

let omiljeniFilmovi = ["Hari Potter", "Brnt", "Batman"];
omiljeniFilmovi.push("Titanik");
console.log(omiljeniFilmovi);
omiljeniFilmovi.unshift("Star Wars");
console.log(omiljeniFilmovi);
console.log(omiljeniFilmovi.length);
let imaMatrix = omiljeniFilmovi.includes("Matrix");
console.log(imaMatrix);
console.log(omiljeniFilmovi[1]);
