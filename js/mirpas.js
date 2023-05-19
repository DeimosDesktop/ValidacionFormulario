//VISITA MIRPAS.COM para ayudarme a seguir subiendo contenido
let nombre = document.getElementById('name');
let apellidos = document.getElementById('surname');
let nif = document.getElementById('nif');
let correo = document.getElementById('email');
let provincia = document.getElementById('provincia');
let anio = document.getElementById('edad');

function Lost_focus(e){
  if(e!==null||e!==undefined){
    if(e.value!==""&&(e.name==="name"||e.name==="surname")){
      e.value=e.value.toUpperCase()
    }
  }
}

function nonumero(){//FUNCION VALIDAR NOMBRE SIN NUMEROS: TODAVIA KO
	var patron = /^[A-Za-z]{3,20}$/;
       if (!(patron.test(nombre.value)))
		   { 
		window.document.getElementById("help_name").style.display='block'; 
		nombre.value=""; nombre.focus(); 
        return false;  }
	 if (!(patron.test(apellidos.value)))
		   { 
		window.document.getElementById("help_apellidos").style.display='block'; 
		apellidos.value=""; apellidos.focus(); 
        return false;  }
 }

function lulu(){//FUNCION EDAD:
	console.log(anio.value);
	if(anio.value>=105){
		window.document.getElementById("help_edad").style.display='block';
		anio.value="";anio.focus();
	}
}

function NIF() {//FUNCION DNI
  var dni=/(^([0-9]{8,8}\-[A-Z])|^)$/; // Esta expresión permite solo 8 numeros un guión y una letra MAYS
    if (!(dni.test(nif.value))) { //Empieza la función en el que si el valor de campo NIF no coincide con
									//la expresión anterior, se muestre el mensaje en el formulario de
		window.document.getElementById("help_dni").style.display='block'; //aviso formato incorrecto.
		nif.value=""; nif.focus(); //borrar el contenido del campo NIF y pone el foco al control.
        return false;  }			//retorna el valor de la función al ser un falso la comparación	
 }

function mail(){//FUNCION EMAIL
var eemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	/* Esta expresión permite el correo esté formado por cualquier carácter letra, dígito, subrrayado de entre 1 a 64 carácteres seguidos por el @ a continuación de 1 a 63 carácteres alfanuméricos terminados con un punto y que en total la longitud del email no supere los 125 carácteres y esté formado por dos cadenas separadas, una primaria de hasta 63 carácteres con letra, dígito y subrrayado y otra después del punto con solo caracteres alfabéticos. */
  if (!(eemail.test(correo.value))) {//Empieza la función que comprueba si el correo está bien metido
      window.document.getElementById("help_email").style.display='block'; //Aviso formato incorrecto CSS
	  correo.value=""; correo.focus(); //Borrar el contenido y pone foco en control email formulario.
	  return false; //retorna falso porque no se ha cumplido la condición inversa
    } 
}

function enviaForm(){
var formulario = document.getElementById("form1");
var dato = formulario[0];
	if (nombre.value=="" || apellidos.value=="" || nif.value=="" || correo.value=="" || anio.value=="") {
		alert("No puede haber ningun campo vacio!!");
		return false;
	}
	else{
		var datos = new Array(5);
		datos[0] = nombre.value; datos[1] = apellidos.value; datos[2] = nif.value; datos[3] = correo.value; datos[4] = provincia.value; datos[5] = anio.value;
		formulario.submit();
		alert("Formulario enviado!!");
	}
}
