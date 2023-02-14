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