function addBola() {

	var x = Math.floor(Math.random()*800);
	var y = Math.floor(Math.random()*500);
	var z = Math.floor(Math.random()*300);
	var cor = Math.floor(Math.random()*4);

	var bola = $('<div class="bola"></div>');

	bola.css('left', x+'px');
	bola.css('top', y+'px');
	bola.css('right', z+'px');

	switch (cor) {
		case 0: 
			bola.css ('background-color', 'red');
			break;
		case 1: 
			bola.css ('background-color', 'gray');
			break;
		case 2: 
			bola.css ('background-color', 'black');
			break;
		case 3: 
			bola.css ('background-color', 'green');
			break;
		case 4: 
			bola.css ('background-color', 'blue');
			break;
	}

	bola.bind('click', function(){

		$(this).fadeOut('fast');

		placar++;
		mudouPlacar();

	});

	$(document.body).append(bola);

}

function mudouPlacar() {

	$('#placar').html(placar);
}

var placar = 0;

$(function(){

	$('#comecar').bind('click', function(){

		setInterval(addBola, 500);


	});

});