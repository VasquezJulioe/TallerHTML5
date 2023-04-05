
const cambiarEstilo1 = () => {
  bdy.classList.add("estilo1");
  bdy.classList.remove("estilo2");
  bdy.classList.remove("estilo3");
  imagen.classList.add("estilo1");
  imagen.classList.remove("estilo2");
  imagen.classList.remove("estilo3");
};

const cambiarEstilo2 = (estilo) => {
  bdy.classList.add(estilo);
  bdy.classList.remove("estilo1");
  bdy.classList.remove("estilo3");
  imagen.classList.add(estilo);
  imagen.classList.remove("estilo1");
  imagen.classList.remove("estilo3");
};

const cambiarEstilo3 = () => {
  bdy.classList.add("estilo3");
  bdy.classList.remove("estilo1");
  bdy.classList.remove("estilo2");
  imagen.classList.add("estilo3");
  imagen.classList.remove("estilo1");
  imagen.classList.remove("estilo2");
};

const ejecutar = (estilos) => {
  var bdy = document.querySelector("#bdy");
  var imagen = document.getElementById("imagen");
  switch (estilos) {
    case "1":
      cambiarEstilo1();
      break;
    case "2":
      cambiarEstilo2("estilo2");
      break;
    case "3":
      cambiarEstilo3();
  }
};



const acordeon = document.getElementsByClassName('container');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}




// alert("primera funcion javascript");

// var array = ["julio","Andres","Diego","Carolina"];
// array.forEach((element,index) => {
//     console.log(index+" -> "+element);
// });

// function saludar(nombre) {
//     console.log('Hola '+nombre);
//     console.log(`Hola ${nombre}`);
// }
// saludar("Julio Vasquez");

// const saludar2 = (nombre) => {
//     return `Hola ${nombre} desde flecha`;
// }
// console.log(saludar2("Julio Elias"));

// const saludar3 = nombre => `Hola ${nombre} desde flecha corta`;
// console.log(saludar3("Julius"));

// const main = () => {
//     let InfoPersonal = document.getElementById("IP");
//     console.log(InfoPersonal);
//     InfoPersonal.classList();

//     let btnEjecutar = document.querySelector('#btnEjecutar');
//     btnEjecutar.addEventListener("click",ejecutar);
// }
