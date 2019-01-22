<?php  

$db=new PDO('mysql:dbname=licenta_android;host=db4free.net;','licenta_admin','d3N2cpJkQGjA297');  

$row=$db->prepare('select * from weather');  

$row->execute();

$json_data=array();
foreach($row as $rec) 
{  
    $json_array['temperatura'][] = $rec['temperatura'];
    $json_array['lumina'][] = $rec['lumina'];
    $json_array['umiditate'][] = $rec['umiditate'];
    $json_array['presiune'][] = $rec['presiune'];
}

array_push($json_data,$json_array);

echo(json_encode($json_data));
// echo file_get_contents("weather.json");
?>
