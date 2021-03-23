<?php

	if (isset($_POST['boton'])) {
		if (!empty($_POST['nombre']) && !empty($_POST['correo']) && !empty($_POST['telefono']) && !empty($_POST['mensaje'])) {
			$nombre = $_POST['nombre'];
			$correo = $_POST['correo'];
			$telefono = $_POST['telefono'];
			$mensaje = $_POST['mensaje'];
				}
	}

	$destino = 'marelynortiz0398@gmail.com';
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo ."\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
	mail($destino,"contacto", $contenido);

	echo "<script>alert('Correo enviado exitosamente')</script>";
	echo "<script> setTimeout(\"location.href='gracias.html'\",1000)</script>";
	
?>