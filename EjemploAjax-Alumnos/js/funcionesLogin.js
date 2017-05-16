function validarLogin()
{
		var varUsuario=$("#correo").val();
		var varClave=$("#clave").val();
		var recordar=$("#recordarme").is(':checked');
		
$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	
//apuntar a esa direccion por post
	$.ajax({url:"php/validarUsuario.php", type:"post", data:{usuario: varUsuario ,clave: varClave , recordarme: varClave}}).then(funcionUno,funcionDos);

		function funcionUno(retorno){

		console.info(retorno);
		
	}

	function funcionDos(retorno){

		//console.info(retorno);
		$("#informe").html(retorno);
		
	}
	
	//	url:"php/validarUsuario.php",
	//	type:"post",
	


		if(retorno == "ingreso"){	
				//MostarBotones();
				MostarLogin();

			//	$("#BotonLogin").html("Ir a salir<br>-Sesión-");
			//	$("#BotonLogin").addClass("btn btn-danger");				
			//	$("#usuario").val("usuario: "+retorno);
			//}else
			//{
			//	$("#informe").html("usuario o clave incorrecta");	
			//	$("#formLogin").addClass("animated bounceInLeft");
		//	}
	//error de ajax muestro lo siguiente
	//	$("#botonesABM").html(":(");
	//	$("#informe").html(retorno.responseText);	

			// si esta logeado le habilito los botones 
			//if(????????){	
				//MostarBotones();
			//	MostarLogin();

			//	$("#BotonLogin").html("Ir a salir<br>-Sesión-");
			//	$("#BotonLogin").addClass("btn btn-danger");				
			//	$("#usuario").val("usuario: "+retorno);
			//}else
			//{
			//	$("#informe").html("usuario o clave incorrecta");	
			//	$("#formLogin").addClass("animated bounceInLeft");
		//	}
	//error de ajax muestro lo siguiente
	//	$("#botonesABM").html(":(");
	//	$("#informe").html(retorno.responseText);	

	
}
function deslogear()
{	
	
	//	url:"php/deslogearUsuario.php",
	//	type:"post"		

}
function MostarBotones()
{	$.ajax({url:"nexo.php", type:"post", data:{queHacer:"MostarBotones"}}).then(funcionUno,funcionDos);

	//	url:"nexo.php",
	//	type:"post",
	//	data:{queHacer:"MostarBotones"}

	function funcionUno(retorno){

		console.info(retorno);
		
	}

	function funcionDos(retorno){

		console.info(retorno);
		$("#botonesABM").html(retorno);
	}

}
