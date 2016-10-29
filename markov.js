var startwords =[];
var terminals = {};
var wordstats = {};
var file = "titles.txt";
var fs = require("fs");

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
