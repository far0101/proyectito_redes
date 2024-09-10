<?php

    require("sistema.php");

    try {
        
        $resultado = $conexion->query("")->fetch();

        echo json_encode($resultado);

    } catch (\Throwable $th) {

        echo "ERROR";
    
    }