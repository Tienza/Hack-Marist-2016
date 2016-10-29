<<<<<<< HEAD
console.log(document.getElementbyClass("titleText"));
$.ajax({
     url: "https://news.google.com/?ar=1477752873",
     dataType: 'text',
     success: function(data) {
          var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
          for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].firstChild.nodeValue;
              console.log(theText);
          }
     }
});
=======
//console.log(document.getElementsbyClassName("titleText"));
>>>>>>> 7494f823fcef4b4a1c7e3c7315f0ca121cd63c5c
