var button = document.getElementById('new-quote'); 
var output = document.getElementById('output');
var tweet = document.getElementById('tweet'), quote;
newQuote();
applyColor();
button.addEventListener('click', function(event) {
  newQuote();
  applyColor();
});

tweet.addEventListener('click', function(event) {
  generateTweet(quote, this);
});

function newQuote() {
  quote = getQuote();
  createParagraphs(quote);
}


function getQuote() {
  var quotes = [], arr;
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';
  function listener() {
    arr = this.responseText.split('","');
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

function generateTweet(array, target) {
  target.href = 'https://twitter.com/intent/tweet?&text=' + array[0] + ' ~ ' + array[1];
}

function applyColor() {
  var colors = ['#F44336','#FF4081','#9C27B0','#7C4DFF','#2196F3','#536DFE','#03A9F4','#00BCD4',
                '#009688','#4CAF50','#8BC34A','#FFC107','#FF5722','#FF9800','#9E9E9E',
                '#607D8B'];
  var randomCol = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.background = randomCol;
  document.documentElement.style.color = randomCol;
}
