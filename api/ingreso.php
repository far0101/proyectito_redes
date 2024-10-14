<?php

  require("sistema.php");

  try {

    $username = $_POST["usuario"];
    $pass = $_POST["clave"];

    $query = $conexion->prepare("SELECT * FROM `usuarios` WHERE email=:usuario AND contraseña=:clave");
    $query->execute([":usuario" => $username, ":clave" => $pass]);
    $result = $query->fetch(PDO::FETCH_ASSOC);

print_r($result);  
  } catch (PDOException $e) {

    echo "Hubo un error: " . $e->getMessage();

  }