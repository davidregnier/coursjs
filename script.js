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
var heuredouverture = 9;
var heuredefermeture = 17;
var heureactuelle = 18;

if(heureactuelle <= heuredouverture){
    alert("c'est trop tôt")
}else if(heureactuelle >= heuredefermeture){
    alert("c'est trop tard")
}if(heureactuelle >= heuredouverture && heureactuelle <= heuredefermeture){
    alert("bienvenue")
    if(heureactuelle <= 12)
    alert("nous somme le matin")
    else
    alert("nous somme l'aprés midi")
}else{
    alert("fermé")
}
// if(heureactuelle > heuredouverture )