let datos = [
	{
		fruta: 'damasco',
		imagen: './frutas/Damasco.svg',
		precio: 800,
		unidad: 'el kilo'
	},
	{
		fruta: 'durazno',
		imagen: './frutas/Durazno.svg',
		precio: 650,
		unidad: 'el kilo'
	},
	{
		fruta: 'frambuesa',
		imagen: './frutas/Frambuesa.svg',
		precio: 2500,
		unidad: 'el kilo'
	},
	{
		fruta: 'frutilla',
		imagen: './frutas/Frutilla.svg',
		precio: 1500,
		unidad: 'el kilo'
	},
	{
		fruta: 'manzana',
		imagen: './frutas/Manzana.svg',
		precio: 450,
		unidad: 'el kilo'
	},
	{
		fruta: 'naranja',
		imagen: './frutas/Naranja.svg',
		precio: 530,
		unidad: 'el kilo'
	},
	{
		fruta: 'pera',
		imagen: './frutas/Pera.svg',
		precio: 430,
		unidad: 'el kilo'
	},
	{
		fruta: 'platano',
		imagen: './frutas/Platano.svg',
		precio: 600,
		unidad: 'el kilo'
	},
	{
		fruta: 'sandia',
		imagen: './frutas/Sandia.svg',
		precio: 1000,
		unidad: 'la unidad'
	},
	{
		fruta: 'uva',
		imagen: './frutas/Uva.svg',
		precio: 1800,
		unidad: 'el kilo'
	}
];

let shuffleArray = shuffle(datos);

window.addEventListener('DOMContentLoaded', function (event){			
	document.getElementById('drag1').innerHTML = `<img id='drag1' class='fruta dropzone' src=${shuffleArray[1].imagen} alt='fruta' data-cualq=${shuffleArray[1].precio} onclick=cambio(1) draggable='true' ondragstart=drag(event) />`;
	document.getElementById('drag2').innerHTML = `<img id='drag2' class='fruta dropzone' src=${shuffleArray[5].imagen} alt='fruta' data-cualq=${shuffleArray[5].precio} onclick=cambio(5) draggable='true' ondragstart=drag(event) />`;
	document.getElementById('drag3').innerHTML = `<img id='drag3' class='fruta dropzone' src=${shuffleArray[8].imagen} alt='fruta' data-cualq=${shuffleArray[8].precio} onclick=cambio(8) draggable='true' ondragstart=drag(event) />`;
});


function shuffle(array){ 
  for (let indice1 = array.length - 1; indice1 > 0; indice1--) {       
	  let indice2 = Math.floor(Math.random() * (indice1 + 1));                    
	  let temp = array[indice1]; 
	  array[indice1] = array[indice2]; 
	  array[indice2] = temp;
  }        
  return array;
}

function cambio(num){			
	document.getElementById('info1').textContent = `${shuffleArray[num].precio}`;
	document.getElementById('info2').innerHTML = `<img src=${shuffleArray[num].imagen} alt=${shuffleArray[num].fruta} class='fruta'  />`;
	document.getElementById('info3').textContent = `${shuffleArray[num].fruta}`;
}

document.querySelector('#evalresultado').addEventListener('click', function(){
	let elem1 = document.querySelector('#caja1 img').dataset.cualq;
	let elem2 = document.querySelector('#caja2 img').dataset.cualq;
	let elem3 = document.querySelector('#caja3 img').dataset.cualq;
	let casobien = document.querySelector('#casobien');
	
	document.querySelector('#evalresultado').remove();

	return (elem2 - elem1 > 0 && elem3 - elem2 > 0) ? 
		casobien.innerHTML = `<div class='bien resultado'> <div class='feedback'>MUY BIEN! <br> Así se hace</div> <img src="./botones/enviar_verde.svg" alt='boton verde' class='boton' /> </div>` 
	: casobien.innerHTML = `<div class='mal resultado'> <div class='feedback'>OOPS! <br> Algo anda mal</div> <img src="./botones/enviar_rojo.svg" alt='boton rojo' class='boton' /> </div>`;
});

function drag(e){
	e.dataTransfer.setData('text', e.target.id);
}

function permitedrop(e){
	e.preventDefault();
}

function drop(e){
	e.preventDefault();
	let data = e.dataTransfer.getData('text');
	e.target.appendChild(document.getElementById(data));
}