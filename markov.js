var startwords = [];
var terminals = {};
var wordstats = {};

var titlesRequest = new XMLHttpRequest();
titlesRequest.open("GET", "titles.json", false);
titlesRequest.send(null);
var titleJSON = JSON.parse(titlesRequest.responseText);
//console.log(titleJSON);
var titles = [];
for (var key in titleJSON) {
    titles.push(titleJSON[key]);
}
console.log(titles);
for (var i = 0; i < titles.length; i++) {
    var words = titles[i].split(' ');
    terminals[words[words.length - 1]] = true;
    startwords.push(words[0]);
    for (var j = 0; j < words.length - 1; j++) {
        if (wordstats.hasOwnProperty(words[j])) {
            wordstats[words[j]].push(words[j + 1]);
        } else {
            wordstats[words[j]] = [words[j + 1]];
        }
    }
}
var choice = function(a) {
    var i = Math.floor(Math.random() * a.length);
    return a[i];
}

function makeTitle() {
    word = choice(startwords);
    var title = [word];
    console.log(word);
    console.log(title);
    while (wordstats.hasOwnProperty(word)) {
        console.log(title);
        var next = wordstats[word];
        word = choice(next);
        title.push(word);
        if (title.length > 20) {
            break;
        }
    }
    var randomNumber = Math.floor(Math.random() * 10);
    var randomWord = title[randomNumber];
    console.log("random word is " + randomWord);
    document.getElementById("output").innerHTML = title.join(' ');
    var pixaApiCall = "https://pixabay.com/api/?key=3642202-1845bf84f1549e9e2f8f587c3&q=" + randomWord + "&image_type=photo&pretty=true";
    console.log(pixaApiCall);
    var request = new XMLHttpRequest();
    request.open("GET", pixaApiCall, false);
    request.send(null);
    var my_JSON_object = JSON.parse(request.responseText);
    if (my_JSON_object.totalHits != 0) {
        var relatedImage = my_JSON_object.hits[0].webformatURL;
        console.log(relatedImage);
        document.getElementById("backgroundImages").style.backgroundImage = "url(" + relatedImage + ")";
    }
    //(my_JSON_object.hit[0].);
}
//var pixaApiCall="https://pixabay.com/api/?key=3642202-1845bf84f1549e9e2f8f587c3&q="+ +"&image_type=photo&pretty=true";
