//Funciones
$(function() {
	$( "#datepicker,#datepicker1,#datepicker2,#datepicker3" ).datepicker();
});

$( "#appointment" ).submit(function( event ) {
	var parametros = $(this).serialize();
	$.ajax({
		type: "POST",
		url: "enviar-mail.php",
		data: parametros,
		beforeSend: function(objeto){
			$("#resultados_ajax").html("Enviando...");
		},
		success: function(datos){
			$("#resultados_ajax").html(datos);
		}
	});

	event.preventDefault();
});

$('.timepicker').wickedpicker({twentyFour: false});

//Fecha Actual
var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
	day = '0' + day
}

if (month < 10) {
	month = '0' + month
}

var out = document.getElementById("output");

out.innerHTML = year;