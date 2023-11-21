//console.dir(document)
//console.log(document.all)
//console.log(document.getElementById('header-title'));
//console.log(document.getElementsByClassName("list-group"))
//var submit=document.querySelector('input[type="submit"]')
//submit.value="send"
//var item =document.querySelector('list-group-item');
//item.style.color='blue';

//var element = document.getElementsByClassName('list-group-item');
//element.style.color = 'red'; 
//var item=document.querySelector('.list-group-item');
//item.style.color='red';
// domManipulation.js

// Example using parentElement
//var mainHeader = document.getElementById('main-header');
//var container = mainHeader.parentElement;
//console.log('Parent Element:', container);

// Example using lastElementChild
//var itemsList = document.getElementById('items');
//var lastItem = itemsList.lastElementChild;
//console.log('Last Element Child:', lastItem);

// Example using lastChild
//var lastItemText = itemsList.lastChild;
//console.log('Last Child:', lastItemText);

// Example using createElement and appendChild
/*var newElement = document.createElement('li');
newElement.textContent = 'New Item';
itemsList.appendChild(newElement);

// Example using firstElementChild
var firstItem = itemsList.firstElementChild;
console.log('First Element Child:', firstItem);

// Example using firstChild
var firstItemText = itemsList.firstChild;
console.log('First Child:', firstItemText);

// Example using nextSibling
var secondItem = firstItem.nextSibling;
console.log('Next Sibling:', secondItem);

// Example using nextElementSibling
var thirdItem = firstItem.nextElementSibling;
console.log('Next Element Sibling:', thirdItem);

// Example using previousSibling
var previousItem = secondItem.previousSibling;
console.log('Previous Sibling:', previousItem);

// Example using previousElementSibling
var previousElement = thirdItem.previousElementSibling;
console.log('Previous Element Sibling:', previousElement);

// Example using createElement, setAttribute, and createTextNode
var newDiv = document.createElement('div');
newDiv.setAttribute('class', 'new-div');
var newText = document.createTextNode('This is a new div.');
newDiv.appendChild(newText);
document.body.appendChild(newDiv);*/

var itemsList=document.querySelector('#items');
console.log(itemsList.children[1]);
itemsList.children[1].style.backgroundColor='yellow';