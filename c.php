<?php

  //set connection variables 
  $hostname = 'localhost';
  $username = 'root';
  $password = '';
  $d_db = 'datab1';
 

  //connection to server & database 
  $connection = mysqli_connect($hostname,$username,$password, $d_db );

  //check connection 
  //check connection 
    if(!$connection){
	  die("connected faild : " .mysqli_connect_error()); 
  }
  	  echo"connected succussfully " ;
	
	
   $run=$_POST['run'];
   
    if(isset($run)){

	$engine_1 = $_POST['engine_1'];
    $engine_2 = $_POST['engine_2'];
    $engine_3 = $_POST['engine_3'];
    $engine_4 = $_POST['engine_4'];
    $engine_5 = $_POST['engine_5'];
    $engine_6 = $_POST['engine_6'];
	
    echo "<br>";

    $my_query = "";

    $my_query = "SELECT * FROM `con_pa1` limit WHERE 1 ";
    $result = mysqli_query($connection, $my_query);

    $my_query = "INSERT INTO con_pa1 (engine_1, engine_2, engine_3, engine_4, engine_5, engine_6) VALUES ('$engine_1', '$engine_2', '$engine_3', '$engine_4', '$engine_5', '$engine_6')";
    $result = mysqli_query($connection, $my_query);
    if($result)
    {
        echo "Item successfuly Added!";
    }
    else{
        echo "ERROR: Unable to past <br>";
    }


}


?>
