const prenom = "david";
const nom = "regnier";
const age = 38;
let date = Date();
const phrase = "bonjour je m'appelle " + prenom + ' ' + nom +" et j'ai " +age +" ans.";
document.getElementById("p1").innerHTML = date;
var monTableau = [];
monTableau["enfant"]= "toto";
monTableau["maman"]= "tati";
monTableau["papa"]= "tutu";
// monTableau.push ("tata")
// monTableau.pop ("tati")
console.table(monTableau);
const rond = document.getElementById("rond");
console.log(rond)
const carre = document.getElementsByClassName("carre");
console.table(carre);
function maFonction(Long, Larg) {
    console.log("la surface est de " +Long*Larg "m²");
}