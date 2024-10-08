<?php

  require("sistema.php");

  try {

    $username = $_POST["usuario"];
    $pass = $_POST["clave"];

    $query = $conexion->prepare("INSERT INTO `usuarios`(`email`, `contraseña`) VALUES (:usuario,:clave)");
    $query->execute([":usuario" => $username, ":clave" => $pass]);
    $result = $query->fetch(PDO::FETCH_ASSOC);
  
  } catch (PDOException $e) {

    echo "Hubo un error: " . $e->getMessage();

  }