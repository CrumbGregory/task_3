const show = document.querySelector('.btn');
const square = document.querySelectorAll('.square');

show.onclick = function () {
	console.log('res');
	square.forEach(element =>
		element.classList.add('move'))
}





// document.querySelector('.btn').onclick = function () {
// 	console.log('respls');
// 	document.getElementsByClassName('.square').hidden = true;

// }