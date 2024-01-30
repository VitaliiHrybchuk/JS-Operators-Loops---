'use strict';
// birds: sparrow, hawk, falcon, eagle, owl
// fishes: salmon, pike, carp, crucian, shark, tuna
// mammalia: dog, cat, whale, horse, human

let creature = 'owl';
switch (creature){
  case 'sparrow':
  case 'hawk':
  case 'falcon':
  case 'eagle':
  case 'owl':
console.log('it is a bird');
break;
  case 'salmon':
  case 'pike':
  case 'carp':
  case 'crucian':
  case 'shark':
  case 'tuna':
console.log('it is a fish');
break;
  case 'dog':
  case 'cat':
  case 'whale':
  case 'horse':
  case 'human':
console.log('it is a mammalia');
break;
default: console.log('it is un unknown creature');
}