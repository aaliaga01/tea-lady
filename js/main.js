function mostrarData() {
			
			var nombreMostrar = document.getElementById("nombre").value;
			var apellidoMostrar = document.getElementById("apellido").value;
			var emailMostrar = document.getElementById("email").value;
			var direccionMostrar = document.getElementById("direccion").value;
			var telefonoMostrar = document.getElementById("telefono").value;

			var mostrar= document.getElementById("clientes");
			mostrar.innerHTML="<p>"+ "<br/>" + nombreMostrar + " " 
			+ apellidoMostrar + "<br/>"+ emailMostrar + "<br/>" + direccionMostrar + "<br/>" 
			+ telefonoMostrar + "</p>";

		}
