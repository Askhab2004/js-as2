console.log(document);

console.dir(document);

//firstChild
//lastchild
//nextsibling
//previusSibling

//firstElementChild
//lastElementchild
//nextElementsibling
//previusElementSibling

console.log(document.body.firstChild.nextSibling);
console.log(document.head.lastChild.previousSibling);

let ul = document.getElementById('ul');
console.log(ul);

let ul1 = document.getElementById('ul');
console.log(ul1.firstElementChild);

let ul2 = document.getElementById('ul');
ul.append('lorem 5');
ul.prepend('lorem 0');

ul.after('after');
ul.before('before');

console.dir(ul2)


