<?php
$url = 'titles.json';
$JSON = file_get_contents($url);

// Convert JSON string to Object
  $someObject = json_decode($JSON);
  $a=array();
// Loop through Object
  foreach($someObject as $key => $value) {
	array_push($a,$value);
  }
 echo '<script>
		var titles ='.json_encode($a ,JSON_PRETTY_PRINT).';';
echo '</script>';
?>
<!DOCTYPE HTML>
<html>
<head>
  <title>Fake News</title>
 <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/journal/bootstrap.min.css" >
<link rel="stylesheet" href="styles.css">
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="scraper.js"></script>
  <script type="text/javascript" src="markov.js"></script>
</head>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">	
      <a class="navbar-brand" href="#">Random Article Generator</a>
    </div>
    </div>
  </div>
</nav>
<body>
	<div class="row row-blackout">
		<div class="col-sm-12"><center>
			<h1>Reads the news and make's its own</h1>
			 <p id = "output">Press the Button Below to Generate News Titles</p>
  <button class="btn btn-success" onclick="makeTitle()">Press</button></center>
		</div>
	</div>
<div class="row row-images">
	
</div>
  <div class="row">
	<div class="col-sm-12">
			<h2> Created With:</h2>
	</div>
</div>

<div class="row">
	<center>
	<div class="col-sm-4">
		<img class="logos" src="images/google-news.png">
		<br>
		<h3>Google News</h3>
	</div>
	
	<div class="col-sm-4">
		<img class="logos" src="images/pixa-logo.png">
		<br>
		<h3>Pexel REST API</h3>
	</div>
	
	<div class="col-sm-4">
	<img class="logos" src="images/bootstrap_logo.png">
	<br>
		<h3>Bootstrap/ Bootswatch</h3>
	</div>
	</center>
</div>
 



 


</body>
</html>
