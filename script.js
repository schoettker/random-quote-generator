var button = document.getElementById('new-quote'); 
var output = document.getElementById('output');

button.addEventListener('click', function(event) {
  var quote = getQuote();
  createParagraphs(quote);
});


function getQuote() {
  var quotes = [], arr;
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';
  function listener() {
    arr = this.responseText.split('","');
    // console.log(arr);
  }
  var request = new XMLHttpRequest();
  request.addEventListener('load', listener);
  request.open('GET', url, false);
  request.setRequestHeader("X-Mashape-Key", "2Zn0LF6bQwmshvTdSrYKATxlCiT8p1LwuSujsnzHVXLdMYdoJ0");
  request.send();

  for (var i = 0, l = arr.length - 1; i < l; i++) {
    var v = arr[i];
    quotes.push(v.replace(/"*\{*"*\w+":"/, ""));
  }

  return quotes;
}

function createParagraphs(array) {
  output.innerHTML = null;
  for (var i = 0, l = array.length; i < l; i++) {
    var v = array[i];
    var para = document.createElement('p');
    para.appendChild(document.createTextNode(v)); 
    output.appendChild(para);
  }
}
