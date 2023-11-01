// 377 1

// let elem = document.querySelector('#elem');
// elem.style.width = '100px'; // устанавливаем ширину
// elem.style.height = '100px'; // устанавливаем высоту
// elem.style.border = '1px solid black'; // устанавливаем границу

// 378 1
// let elem = document.querySelector('#elem');
// elem.style.fontSize = '20px'; // устанавливаем размер шрифта
// elem.style.borderTop = '1px solid black'; // устанавливаем верхнюю границу
// elem.style.backgroundColor = 'blue'; // устанавливаем фон

// 379 1
// let ul = document.querySelector('ul');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//   let lis = ul.querySelectorAll('li');
//   for (let i = 0; i < lis.length; i++) {
//     lis[i].style.cssFloat = 'left';
//   }
// });

// 380 1
// let elem = document.querySelector('#elem');
// elem.classList.add('red');

// 381 1 
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//   let clicked = false;
//   elem.addEventListener('click', function() {
//     if (clicked) {
//       this.classList.remove('colored');
//       clicked = false;
//     } else {
//       this.classList.add('colored');
//       clicked = true;
//     }
//   });
// }

// 382

// <button id="button">click me</button>
// <div id="elem"></div>

// #elem {
// 	display: none;
// 	width: 200px;
// 	height: 200px;
// 	border: 1px solid green;
// }
// #elem.active {
// 	display: block;
// }

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function() {
// 	elem.classList.toggle('active');
// });

// выходит по клику квадратик 