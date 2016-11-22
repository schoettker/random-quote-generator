var button = document.getElementById('new-quote'); 
var output = document.getElementById('output');

button.addEventListener('click', function(event) {
});


var author, text, arr;
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

var quotes = [];
for (var i = 0, l = arr.length - 1; i < l; i++) {
  var v = arr[i];
  quotes.push(v.replace(/"*\{*"*\w+":"/, ""));
}
console.log(quotes);
