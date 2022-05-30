const show = document.querySelector('.btn');
const square = document.querySelectorAll('.container');

show.onclick = function () {
	square.forEach(element =>
		element.classList.toggle('move'))
}






// document.querySelector('.btn').onclick = function () {
// 	console.log('respls');
// 	document.getElementsByClassName('.square').hidden = true;

// }