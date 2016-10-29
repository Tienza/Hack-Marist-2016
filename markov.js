var titles = [];
  $(function() {
	$.get('titles.txt', function(data) {
	  arr = string.split('\n'),
		i;

	for(i in arr){
		if(arr[i] == 123) alert(arr[i]);
	});
	}, 'text');

	//$.get('titles.txt', function(data) {
	//}, 'text');
$.getJSON( "titles.json", function( data ) {
	//array to store all titles, change to use array that is created below
  var items = [];
  $.each( data, function( key, val ) {
	  //console to see all keys and values for debugging purposes
    //console.log( "key is: " + key + " .value is: " + val + " ." );
    //push items to array
    items.push( val);
  });
  //print items to debug
  //console.log(items);

});  });

var startwords =[];
var terminals = {};
var wordstats = {};

for(var i = 0; i < titles.length; i++){
    var words = titles[i].split(' ');
    terminals[words[words.length-1]] = true;
    startwords.push(words[0]);
    for(var j = 0; j < words.length - 1; j++){
      if(wordstats.hasOwnProperty(words[j])){
        wordstats[words[j]].push(words[j+1]);
      }else{
        wordstats[words[j]] = [words[j+1]];
      }
    }
}
var choice = function(a){
  var i = Math.floor(Math.random() * a.length);
  return a[i];
}

function makeTitle(){
  word = choice(startwords);
  var title = [word];
  console.log(word);
  console.log(title);
  while(wordstats.hasOwnProperty(word)){
    console.log(title);
    var next = wordstats[word];
    word = choice(next);
    title.push(word);
  }
  document.getElementById("output").innerHTML = title.join(' ');
}
