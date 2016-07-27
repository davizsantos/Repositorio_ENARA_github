/***VALIDAR VACIO    NO FUNCIONA***/
//Recibe String
function esVacio(elemento){
	alert(document.getElementById(elemento).value);
	if(elemento.value==""){
		document.getElementById("emailVacio").classList.add("mostrar");
    	document.getElementById("emailVacio").classList.remove("ocultar");
		return true;
	}else{
		document.getElementById("emailVacio").classList.add("ocultar");
    	document.getElementById("emailVacio").classList.remove("mostrar");
		return false;
	}
}

/***VALIDAR REGISTRO***/
function validarRegistro(){
	//alert("validandoRegistro");
	var estaTodoOk=true;
	
	//NICK obligatorio
	/*if(validarNick()==false){
		estaTodoOk=false;
	}
	
	//NOMBRE obligatorio
	if(validarNombre()==false){
		estaTodoOk=false;
	}
	
	//APELLIDOS obligatorio
	if(validarApellidos()==false){
		estaTodoOk=false;
	}
	
	//CONTRASEÑA obligatorio
	if(validarContrasena()==false){
		estaTodoOk=false;
	}*/
	
	//EMAIL obligatorio
	var email=document.getElementById("emailID");
	var emailValido=true;
	if(email.value==""){
		document.getElementById("errorVacioEmailID").classList.add("mostrar");
    	document.getElementById("errorVacioEmailID").classList.remove("ocultar");
    	//Oculto errorFormato
    	document.getElementById("errorFormatoEmailID").classList.remove("mostrar");
    	emailValido=false;    	
	}else{
		//Oculto emailVacio
		document.getElementById("errorVacioEmailID").classList.remove("mostrar");
		document.getElementById("errorVacioEmailID").classList.add("ocultar");
		
		var re=/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	    var valido = re.test(email.value);
		document.getElementById("errorFormatoEmailID").classList.add("ocultar");
    	document.getElementById("errorFormatoEmailID").classList.remove("mostrar");
    	if(!valido){
    		document.getElementById("errorFormatoEmailID").classList.add("mostrar");
        	document.getElementById("errorFormatoEmailID").classList.remove("ocultar");
        	emailValido=false;
    	}else{
    		document.getElementById("errorFormatoEmailID").classList.add("ocultar");
        	document.getElementById("errorFormatoEmailID").classList.remove("mostrar");
    	}    	
	}
	
	if(!emailValido){
		estaTodoOk=false;
	}
	
	//alert(estaTodoOk);
	
	return estaTodoOk;
}



/***VALIDAR EMAIL***/
//No recibe nada
function validarEmail() {
	//alert("validando con regex");
	var email=document.getElementById("email");
	var valido=true;
	if(email.value==""){
		document.getElementById("emailVacio").classList.add("mostrar");
    	document.getElementById("emailVacio").classList.remove("ocultar");
    	valido=false;
	}else{
		document.getElementById("emailVacio").classList.add("ocultar");
    	document.getElementById("emailVacio").classList.remove("mostrar");
    	valido=esEmailValido(email);
    	if(!valido){
    		document.getElementById("emailFormato").classList.add("mostrar");
        	document.getElementById("emailFormato").classList.remove("ocultar");
    	}else{
    		document.getElementById("emailFormato").classList.add("ocultar");
        	document.getElementById("emailFormato").classList.remove("mostrar");
    	}    	
	}
    return valido;
}

//Recibe elemento
function esEmailValido(elemento) {
	var email=elemento;
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    var valido = re.test(email.value);
    if(email.value==""){
		document.getElementById("emailVacio").classList.add("mostrar");
    	document.getElementById("emailVacio").classList.remove("ocultar");
    	document.getElementById("emailFormato").classList.add("ocultar");
    	document.getElementById("emailFormato").classList.remove("mostrar");
    	valido=false;
	}else{
		document.getElementById("emailVacio").classList.add("ocultar");
    	document.getElementById("emailVacio").classList.remove("mostrar");
    	if(!valido){
    		document.getElementById("emailFormato").classList.add("mostrar");
        	document.getElementById("emailFormato").classList.remove("ocultar");
        	valido=false;
    	}else{
    		document.getElementById("emailFormato").classList.add("ocultar");
        	document.getElementById("emailFormato").classList.remove("mostrar");
    	}    	
	}
    return valido;
}

function quitarErroresMail(){
	document.getElementById("emailVacio").classList.add("ocultar");
	document.getElementById("emailVacio").classList.remove("mostrar");
	document.getElementById("emailFormato").classList.add("ocultar");
	document.getElementById("emailFormato").classList.remove("mostrar");
}

function ponerRojo(elemento){
	elemento.classList.add("fondo-rojo");
}
/***FIN VALIDAR EMAIL***/

/*Cambiar los links de los generos en fichaSerie.java*/
function ponerColorNaranja(elemento){
	elemento.classList.remove("letra-naranja");
}

function quitarColorNaranja(elemento){
	elemento.classList.add("letra-naranja");
}

/*Poner la imagen en semi transparente onmouseover()*/
function ponerFotoTransparente(elemento){
	elemento.classList.add("fondo-transparente-50");
}
function quitarFotoTransparente(elemento){
	elemento.classList.remove("fondo-transparente-50");
}

/*Mostrar elemento*/
function mostrar(elemento){
	elemento.classList.add("mostrar");
	elemento.classList.remove("ocultar");
}
function ocultar(elemento){
	elemento.classList.add("ocultar");
	elemento.classList.remove("mostrar");
}

/*Poner y quitar fondo gris*/
function ponerFondoGris50(elemento){
	elemento.classList.add("fondo-gris-transparente-50");
}
function quitarFondoGris50(elemento){
	elemento.classList.remove("fondo-gris-transparente-50");
}

/*Poner y quitar letra blanca*/
function ponerLetraBlanca(elemento){
	elemento.classList.add("letra-blanca");
}
function quitarLetraBlanca(elemento){
	elemento.classList.remove("letra-blanca");
}