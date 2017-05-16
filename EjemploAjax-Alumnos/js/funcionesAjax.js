
function MostrarError()
{
	$.ajax({url:"nexoNoExiste.php", type:"post"}).then(funcionUno,funcionDos);

	function funcionUno(retorno){

		console.info(retorno);
		$("#informe").html(retorno.responseText);
	}

	function funcionDos(retorno){

		console.info(retorno);
		$("#informe").html(retorno.responseText);
	}

	


//	$("·")
	//alert("error");
	//url:"nexoNoExiste.php",type:"post"
	//them recibe dos punteros a funcion, las cuales se ejecutan segun sea la respuesta del ajas

}
function MostrarSinParametros()
{
	//$.ajax({url:"nexoTexto.php"}).then(funcionUno,funcionDos);
	
	//url:"nexoTexto.php"});

}

function Mostrar(queMostrar)
{
	$.ajax({url:"nexo.php",type:"post", data:{queHacer : "foto" }}).then(funcionUno,funcionDos);

	function funcionUno(retorno){

		console.info(retorno);
		
	}

	function funcionDos(retorno){

		console.info(retorno);
		$("#main-nav").html(retorno.queHacer);
	}

	//	alert(queMostrar);
		//url:"nexo.php",
		//type:"post",
	
}

function MostarLogin()
{
		//alert(queMostrar);
//	Esto funciona
var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}