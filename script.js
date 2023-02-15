// const prenom = "david";
// const nom = "regnier";
// const age = 38;
// let date = Date();
// const phrase = "bonjour je m'appelle " + prenom + ' ' + nom +" et j'ai " +age +" ans.";
// document.getElementById("p1").innerHTML = date;
// var monTableau = [];
// monTableau["enfant"]= "toto";
// monTableau["maman"]= "tati";
// monTableau["papa"]= "tutu";
// // monTableau.push ("tata")
// // monTableau.pop ("tati")
// console.table(monTableau);
// const rond = document.getElementById("rond");
// console.log(rond)
// const carre = document.getElementsByClassName("carre");
// console.table(carre);
// function maFonction(Long, Larg) {
//     console.log("la surface est de " +Long*Larg "m²");
// }

// var maChaine = new string; 
// var a = 42;
// var b = 4.2;
// var c = -42;
// var d = "42";
// alert("ma variable a " + typeof (a) +
// "\nma variable b " + typeof (b) +
// "\nma variable c " + typeof (c) +
//  "\nma variable d " + typeof (d));

// var n = null;
// var u = undefined;
// var nn = NaN;

// alert("ma variable n " + typeof (n) +
// "\nma variable u " + typeof (u) +
// "\nma variable nn " + typeof (nn) );
// var x = 32;
// var y = 5;
// var z = 2;

// y += z 
// y *= z 
// y -= z 
// y /= z 
// y %= z 
// alert(y)
// var heuredouverture = 9;
// var heuredefermeture = 17;
// var heureactuelle = 18;

// if(heureactuelle <= heuredouverture){
//     alert("c'est trop tôt")
// }else if(heureactuelle >= heuredefermeture){
//     alert("c'est trop tard")
// }if(heureactuelle >= heuredouverture && heureactuelle <= heuredefermeture){
//     alert("bienvenue")
//     if(heureactuelle <= 12)
//     alert("nous somme le matin")
//     else
//     alert("nous somme l'aprés midi")
// }else{
//     alert("fermé")
// }
// if(heureactuelle > heuredouverture )
// let note = 7.5;
// let noteAmericaine = "";

// if(note<=5){
//     noteAmericaine = "F";
//     alert("honteux")
// }
// else if(note>=6 && note < 9){
//     noteAmericaine = "E";
//     alert("pas assez travaillé")
// }
// else if(note>=9 && note < 12){
//     noteAmericaine = "D";
//     alert("travaille à renforcer")
// }
// else if(note>=12 && note < 15){
//     noteAmericaine = "C";
//     alert("correct")
// }
// else if(note>=15 && note < 18){
//     noteAmericaine = "B";
//     alert("bon travaille")
// }
// else if(note>=18 && note < 19){
//     noteAmericaine = "A";
//     alert("excellent")
// }
// else if(note > 19){
//     noteAmericaine = "A+";
//     alert("Parfait")
// }
// else{
//     noteAmericaine = "Abs";
// }
// alert(noteAmericaine)

// switch (noteAmericaine) {
//     case "F":
//         alert("honteux")
//         break;
//     case "E":
//         alert("pas assez travaillé")
//         break;
//     case "D":
//         alert("travaille à renforcer")
//         break;
//     case "C":
//         alert("correct")
//         break;
//     case "B":
//         alert("bon travaille")
//         break;
//     case "A":
//         alert("excellent")
//         break;
//     case "A":
//         alert("Parfait")
//         break;
//     default:
//         alert("jamais vue")
//         break;
// }

// let montant = 3500;
// let pourcentage = 0;

// if (montant<1000) {
//     pourcentage = 0;
// } else if (montant >=1000 && montant<=2500){
//     pourcantage = 5;
// } else {
//     pourcentage = 10;
// }
// let resultat = montant-(pourcentage*montant)/100;

// switch (pourcentage) {
//     case 5:
//         alert(resultat)
//         break;
//     case 10:
//         alert(resultat)
//         break;

//     default:
//         alert(montant)
// }

var arrayNbr = [1, 2, 3];
var arrayStr = ["a", "b", "c"];

//  arrayNbr.push(4); //[1, 2, 3, 4] ajoute la valeur indiqué à la fin du tableau
//  arrayNbr.pop(); //[1, 2] retire la dernière valeur
//  arrayNbr.shift(); //[2, 3] retire la première valeur
//  arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau
//  arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
//  arrayStr.join('-'); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
//  arrayStr.slice(1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial
//  arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
//  arrayStr.includes("c"); //true vérifie si la valeur existe
//  arrayStr.indexOf("c"); //2 renvoi le position (index) de la valeur dans le tableau
//  arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau
// arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
//  arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
// arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
//  arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
//  arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
//  arrayNbr.every(el => el > 1);
//  arrayNbr.reverse();