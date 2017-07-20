<?php
	$im = $_POST["im"];
	$tel = $_POST["pf"];
	$from = $_POST["from"];
	$about = $_POST["about"];
	$title = 'Заявка';
	
	if($from != ''){
		$title ="Bethoven $from";
	} 
	if($im != ''){
		$text = "$text \nИмя: $im";
	} 
	if($tel != ''){
		$text = "$text \nТелефон: $tel";
	} 
	if($about != ''){
		$text ="$text \nО ремонте: $about";
	} 
	$text = "$text  \n";
	
	mail('komrad.bethoven2017@yandex.ru', "$title", "$text"); 
	mail('Stenin@360-media.ru', "$title", "$text"); 
	//
?>
