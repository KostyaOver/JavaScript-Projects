let elem = document.querySelector('.grid');
let p = document.querySelector('p');
let reset = document.querySelector('#reset');
let imgLive = document.querySelector('#live');
let lives = document.querySelector('h3');
let play = document.querySelector('#play');

let guess = 0;
let numbers = [];
let endGame = false;

for(let i = 0; i < 5; i++){
	let number = Math.floor(Math.random() * 22) + 1;
	if(numbers.indexOf(number) == -1){
		numbers[i] = number;
	} else {
		i--;
	}
}

console.log('Winning combination is ' + numbers); //Chit 
let timerId;

play.addEventListener('click', function play(){
	if(endGame){
		p.innerHTML = 'Click there &#129042;'
		play.removeEventListener('click', play);
	}
	timerId= setInterval(function(){
		p.innerHTML = Number(p.innerHTML) - 1;
		if( Number(p.innerHTML) == 0 && guess != 5){
			gameOver();
			endGame = true;
		}
	}, 1000);

	elem.addEventListener('click', function start(event){
		let ev = event;
		func(ev);
		if(endGame){
			elem.removeEventListener('click', start);
	}
});


reset.addEventListener('click', function(){
	location.reload();
})


function gameOver() {	
	p.innerHTML = 'Game over';
	p.classList.add('gameover');
	clearInterval(timerId);
	endGame = true;
}

function win() {
	p.innerHTML = 'You win';
	p.classList.add('win');
	clearInterval(timerId);
	endGame = true;
}

function func(event){
	if(event.target.classList.contains('item')){
		if(numbers.indexOf(Number(event.target.innerHTML)) !== -1 && guess != 5){
			event.target.classList.add('green');
			guess++;
		} else {
			event.target.classList.add('red');
			lives.innerHTML = Number(lives.innerHTML) - 1;
		}

		if(guess == 5){
			win();
		}
		
		if(lives.innerHTML == '0') {			
			imgLive.src = 'https://www.flaticon.com/svg/vstatic/svg/520/520657.svg?token=exp=1617541350~hmac=839b95282d4fc4777b41c02574987cae';
			gameOver();
		}
	}
}


});