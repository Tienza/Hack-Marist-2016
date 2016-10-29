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
