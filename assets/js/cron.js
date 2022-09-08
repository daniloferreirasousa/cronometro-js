let h=0;
let m=0;
let s=0;
let ms=0;
let cron;

function iniciar(){
	pausar();
	cron = setInterval(() => {timer();}, 10);
}

function pausar(){
	clearInterval(cron);

	if(document.querySelector('.cron').classList.contains('piscar')){
		document.querySelector('.cron').classList.remove('piscar');
	} else{
		document.querySelector('.cron').classList.add('piscar');
	}
}

function reiniciar(){
	h = 0;
	m = 0;
	s = 0;
	ms = 0;
	document.querySelector('#hour').innerText = '00';
	document.querySelector('#minute').innerText = '00';
	document.querySelector('#second').innerText = '00';
	document.querySelector('#millisecond').innerText = '000';
}

function timer(){
	if((ms += 10) == 1000){
		ms = 0;
		s++;
	}
	if (s == 60){
		s = 0;
		m++;
	}
	if (m == 60){
		m = 0;
		h++;
	}

	document.querySelector('#hour').innerText = returnData(h);
	document.querySelector('#minute').innerText = returnData(m);
	document.querySelector('#second').innerText = returnData(s);
	document.querySelector('#millisecond').innerText = returnData(ms);

}

function returnData(input){
	return input > 10 ? input : `0${input}`;
}