var button = document.getElementById('new-quote'), 
output = document.getElementById('output'),
tweet = document.getElementById('tweet');

window.onload = function() {
  XHRequest();
  changeColor();
};

button.addEventListener('click', function(event) {
  XHRequest();
  changeColor();
});

function XHRequest() {
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
  request = new XMLHttpRequest();
  request.addEventListener('load', proccesResponse);
  request.open('GET', url);
  request.setRequestHeader("X-Mashape-Key", "2Zn0LF6bQwmshvTdSrYKATxlCiT8p1LwuSujsnzHVXLdMYdoJ0");
  request.send();
}
function proccesResponse() {
  var arr = this.responseText.split('","'), quote = [];
  for (var i = 0, l = arr.length - 1; i < l; i++) {
    quote.push(arr[i].replace(/"*\{*"*\w+":"/, ""));
  }
  createParagraphs(quote);
  tweet.addEventListener('click', function(event) {
    generateTweet(quote, this);
  });
}
function createParagraphs(array) {
  output.innerHTML = null;
  for (var i = 0, l = array.length; i < l; i++) {
    para = document.createElement('p');
    para.appendChild(document.createTextNode(array[i])); 
    output.appendChild(para);
  }
}
function generateTweet(array, target) {
  target.href = 'https://twitter.com/intent/tweet?&text=' + array[0] + ' ~ ' + array[1];
}

function changeColor() {
  var colors = ['#F44336','#FF4081','#9C27B0','#7C4DFF','#2196F3','#536DFE','#03A9F4','#00BCD4',
                '#009688','#4CAF50','#8BC34A','#FFC107','#FF5722','#FF9800','#9E9E9E',
                '#607D8B'],
  randomCol = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.background = randomCol;
  document.documentElement.style.color = randomCol;
}
