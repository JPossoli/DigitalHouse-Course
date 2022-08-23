/*
*TODO:
*Display the result in html class "display_text"
*Diplay the operation in html class "status_text"
*/
import {sum} from './sum.js';
import {sub} from './subtraction.js';
import {multiplication} from './multiplication.js';
import {division} from './division.js';
import {mod} from './mod.js';
import {invert_signal} from './invert_signal.js'
import {clear} from './clear.js'

/*console.log(sum(1,2));
console.log(sub(1,2));
console.log(multiplication(1,2));
console.log(division(1,2));
console.log(mod(4,2));*/

let historico, resultado;

document.getElementById('c_btn').addEventListener('click', clear);


document.getElementById('one').addEventListener('click', console.log('1'));
/*document.getElementById('two').addEventListener('click',);
document.getElementById('three').addEventListener('click',);
document.getElementById('four').addEventListener('click',);
document.getElementById('five').addEventListener('click',);
document.getElementById('six').addEventListener('click',);
document.getElementById('seven').addEventListener('click',);
document.getElementById('eight').addEventListener('click',);
document.getElementById('nine').addEventListener('click',);
document.getElementById('zero').addEventListener('click',);*/