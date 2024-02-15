var contadorPaso = 0;
var j = 0;
/*True es para las blancas y false para las negras*/
var tokens = "", i = 0 , turno = true;
var texto = "";
function removernumero() {
  // var texto = document.getElementById("textarea1").value;
  //document.getElementById("textarea2").innerHTML = texto.replace(/\d+\.\s*/g, ''); 
   texto = document.getElementById("textarea1").value.replace(/\d+\.\s*/g, '');
}
function getTokens() {
  tokens = texto.split(/\s+/);

  //var salida = "";
  //for (let i = 0; i < tokens.length; i++) {
//salida += tokens[i] + "\n"
      
  //}
  //document.getElementById("out").innerHTML = salida;
}
function pasos(){
  var pieza="";
  if (!tieneMayusculas(tokens[i])) {
    pieza="peon";
  }
  else if(tokens[i].startsWith("N")){
    pieza="caballo";
  }
  else if(tokens[i].startsWith("B")){
    pieza="Alfil";
  }
  else if(tokens[i].startsWith("K")){
    pieza="Rey";
  }
  else if(tokens[i].startsWith("Q")){
    pieza="Reina";
  }
  else if(tokens[i].startsWith("R")){
    pieza="Torre";
  }
  else if(tokens[i].startsWith("O")){
    pieza="Enroque";
  }
  document.getElementById("turno").innerHTML = "Movimiento: " + (i + 1) 
  + " Turno " + (turno == true ? "blancas " : " negras ")+ tokens[i++]+ " "+ pieza;
  turno = !turno;
}

function iniciar() {
  var celdas = document.getElementById("Tablero");
  celdas.rows[2].cells[1].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[2].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[3].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[4].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[5].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[6].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[7].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[8].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";

  celdas.rows[7].cells[1].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[2].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[3].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[4].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[5].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[6].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[7].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[8].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";

  celdas.rows[8].cells[3].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReyB.png); background-size:cover;";
  celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[5].style =
    "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/ReinaN.png); background-size:cover;";
}

function partidas() {
  var textarea = document.getElementById("texto");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "0":
      textarea.value = "";
      break;
    case "1":
      textarea.value = "Partida 1";
      break;
    case "2":
      textarea.value = "Partida 2";
      break;
    case "3":
      textarea.value = "Partida 3";
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();

  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
    /*document.getElementById("texto").value = document.getElementById("cargarBoton").files;*/
  };
  scanner.readAsText(archivo);
  removernumero();
  getTokens();
}

 function pasoApaso() {
  var celdas = document.getElementById("texto").value;
  var tabla = document.getElementById("Tablero");
  //var lineas = celdas.split("\n");
  //for (let i = 0; i < lineas.length; i++) {
  //alert(lineas[i]);
  var tokens = celdas.split(/\s+/);
 
  //alert(tokens[j]);
  //alert(tieneMayusculas(tokens[j]));
 
  //if (turno) {
    //j = 1;
  //} else {
   // j = 2;
  //}
  /*if (!tieneMayusculas(tokens[j])) {
    //alert("Si soy un Peon y me moví a "+tokens[j]);
    var posicion = tokens[j].split(/(\d+)/);
    //El usar alert no se recomienda porque no puedes hacer nada en la página, se recomienda usar el console.log
    console.log(
      "Columna " + convertirLetraNumero(posicion[0]) + " renglon " + posicion[1]
    );
    var columna = parseInt(convertirLetraNumero(posicion[0]));
    var renglon = parseInt(posicion[1]);
    if (turno) {
      tabla.rows[renglon + 1].cells[columna + 1].style =
        "background-image: url(./img/PeonB.png); background-size:cover;";
    } else {
      tabla.rows[renglon - 1].cells[columna + 1].style =
        "background-image: url(./img/PeonN.png); background-size:cover;";
    }
  }
  if (turno == false) {
    i++;
  }*/
  turno = !turno;
  document.getElementById("turno").innerHTML =
    "Turno de las " +
    (turno ? "blancas " : "negras ") +
    //renglon +
    " " +
    //columna +
    " " +
    tokens[j];
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  //}
  //}
  i++;
  j++;
}

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}
function convertirLetraNumero(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;

    case "b":
      return 1;
      break;

    case "c":
      return 2;
      break;

    case "d":
      return 3;
      break;

    case "e":
      return 4;
      break;

    case "f":
      return 5;
      break;

    case "g":
      return 6;
      break;

    case "h":
      return 7;
      break;
  }
}

/*async function test() {
  var salida = "";
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    salida += i + "<br>";
    document.getElementById("out").innerHTML = salida;
  }
}*/
