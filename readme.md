# <p align="center">Cours de JavaScript  </p>
<p align="center"> <img src="IMG\js-logo.webp" alt="" /> </p>  

## Introduction au JavaScript  
## <u>**Définition**</u>
JavaScript est un langage de programmation utilisé par les développeurs pour concevoir des sites web interactifs. Les fonctions JavaScript peuvent permettre d'améliorer l'expérience utilisateur d'un site web, de la mise à jour des flux de médias sociaux à l'affichage d'animations et de cartes interactives. En tant que langage de script côté client, c'est l'une des principales technologies du web. Lors de la navigation sur Internet, à tout moment vous pouvez par exemple voir un carrousel d'images, un menu déroulant « Cliquer pour afficher » ou le changement dynamique de la couleur des éléments d'une page web. Tout cela est possible grâce à JavaScript.  
## <u>Qu'est-ce qu'un variable ?</u>  
Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.

Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.

Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.  

## <u>Les règles de déclaration des variables en JavaScript</u>  
Une variable est donc un conteneur ou un espace de stockage temporaire qui va pouvoir stocker une valeur. Lorsqu’on stocke une valeur dans une variable, on dit également qu’on assigne une valeur à une variable.

Pour pouvoir utiliser les variables et illustrer leur intérêt, il va déjà falloir les créer. Lorsqu’on crée une variable en JavaScript, on dit également qu’on « déclare » une variable.  
Pour déclarer une variable en JavaScript, nous allons devoir utiliser le mot clef var ou le mot clef let (nous allons expliquer la différence entre les deux dans la suite de cette leçon) suivi du nom qu’on souhaite donner à notre variable.

Concernant le nom de nos variables, nous avons une grande liberté dans le nommage de celles-ci mais il y a quand même quelques règles à respecter :

Le nom d’une variable doit obligatoirement commencer par une lettre ou un underscore (_) et ne doit pas commencer par un chiffre ;
Le nom d’une variable ne doit contenir que des lettres, des chiffres et des underscores mais pas de caractères spéciaux ;
Le nom d’une variable ne doit pas contenir d’espace.

### <u> exemple de variable </u>
```
var a = 42;
var b = 4.2;
var c = -42;
var d = "42";
alert("ma variable a " + typeof (a) +
"\nma variable b " + typeof (b) +
"\nma variable c " + typeof (c) +
 "\nma variable d " + typeof (d));
 ```
<p align="center"> <img src="IMG\var typeof.png" alt="" /> </p> 

```
var n = null;
var u = undefined;
var nn = NaN;

alert("ma variable n " + typeof (n) +
"\nma variable u " + typeof (u) +
"\nma variable nn " + typeof (nn) );
```
La valeur **null** est un littéral JavaScript représentant la nullité au sens où aucune valeur pour l'objet n'est présente.

**undefined** est une propriété de l'objet global, c'est-à-dire qu'elle est accessible globalement. La valeur initiale d'undefined est la valeur primitive undefined.

La propriété globale **NaN** est une valeur utilisée pour représenter une quantité qui n'est pas un nombre (Not a Number en anglais).  

typeof est un opérateur d'affectation

## differences entre *var* et *let*  

Avec l’ancienne syntaxe var, on avait le droit de déclarer plusieurs fois une même variable en utilisant à chaque fois var (ce qui avait pour effet de modifier la valeur stockée).

La nouvelle syntaxe avec let n’autorise pas cela. Pour modifier la valeur stockée dans une variable avec la nouvelle syntaxe, il suffit d’utiliser le nom de la variable et de lui affecter une autre valeur.

Cette décision a été prise une nouvelle fois pour des raisons de clarté et de pertinence du code. En effet, il n’y a aucun intérêt à redéfinir une même variable plusieurs fois.

La « portée » d’une variable désigne l’endroit où cette variable va pouvoir être utilisée dans un script. Il est un peu tôt pour vous expliquer ce concept puisque pour bien le comprendre il faut déjà savoir ce qu’est une fonction.

Nous reparlerons donc de cette portée des variables lorsque nous aborderons les fonctions en JavaScript.

Vous pouvez pour le moment retenir si vous le souhaitez que les variables déclarées avec var et celles avec let au sein d’une fonction ne vont pas av

#€ Les opérateurs arithmétique
```
var x = 32;
var y = 5;
var z = 2;

y += z 
y *= z 
y -= z 
y /= z 
y %= z 
alert(y)
```
|opérateur|Nom|But|Exemple|
|:-------|:------|:-----:|:-----|
|+|addition|ajoute deux nombres|6+9|
|-|Soustraction|Soustrait le nombre de droite de celui de gauche.|20 - 15|
|*|	Multiplication|	Multiplie deux nombres.|3 * 7|
|/|Division|Divise le nombre de gauche par celui de droite.|10/5|
|%|Reste (quelquefois nommé modulo)|Renvoie le reste de la division du nombre de gauche par celui de droite.|8 % 3 (renvoie 2, car 3 est contenu 2 fois dans 8, et il reste 2)|
|**|Puissance (exponentiation)|Élève un nombre à la puissance fournie par le deuxième nombre. Autrement dit, le nombre à gauche est multiplié par lui-même autant de fois que le nombre de droit. Cet opérateur est apparu avec ECMAScript 2016.|5 ** 2 (renvoie 25, qui correspond à 5 * 5).|
|==|egalité|Renvoie true si les opérandes sont égaux (après conversion implicite).|3 == var1 |
|!=|inegalité|	Renvoie true si les opérandes sont différents (après conversion implicite).|var1 != 4|
|===|égalité stricte|Renvoie true si les opérandes sont égaux et du même type. Voir également Object.is() et l'égalité en JavaScript.|3 === var1|
|!==|inégalité stricte|Renvoie true si les opérandes sont du même type et différents ou s'ils ne sont pas du même type.|var1 !== "3"|
|>|supériorité stricte|Renvoie true si l'opérande gauche est strictement supérieur à l'opérande droit.|var1 > var2||
|>=|Superiorité|Renvoie true si l'opérande gauche est supérieur ou égal à l'opérande droit.|var2 >= var1|
|<|Inferiorité stricte|Renvoie true si l'opérande gauche est strictement inférieur à l'opérande droit.|var1 < var2|
|<=|inferiorité|	Renvoie true si l'opérande gauche est inférieur ou égal à l'opérande droit.| var2<= 5|
|&&|ET logique|Renvoie expr1 si elle peut être convertie en false et renvoie expr2 sinon. Lorsqu'il est utilisé avec des valeurs booléennes, && renvoie true si les deux opérandes valent true et false sinon.|expr1 && expr2|
|`||`|OU logique|Renvoie expr1 si elle peut être convertie en true et renvoie expr2 sinon. Lorsqu'il est utilisé avec des valeurs booléennes, `||` renvoie true si l'un des deux opérandes vaut true et false si les deux valent false.| expr1 `||` expr2|
|!|NON logique|Renvoie false si son unique opérande peut être converti en true, renvoie true sinon.| !expr|

```var arrayNbr = [1, 2, 3];
var arrayStr = ["a", "b", "c"];
 arrayNbr.push(4); //[1, 2, 3, 4] ajoute la valeur indiqué à la fin du tableau
 arrayNbr.pop(); //[1, 2] retire la dernière valeur
 arrayNbr.shift(); //[2, 3] retire la première valeur
 arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau
 arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
 arrayStr.join('-'); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
 arrayStr.slice(1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial
 arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
 arrayStr.includes("c"); //true vérifie si la valeur existe
 arrayStr.indexOf("c"); //2 renvoi le position (index) de la valeur dans le tableau
 arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau
arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
 arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
 arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
 arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
 arrayNbr.every(el => el > 1);//La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.
 arrayNbr.reverse();// La méthode reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.```