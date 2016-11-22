var button = document.getElementById('new-quote'); 
var output = document.getElementById('output');
button.addEventListener('click', function(event) {
  getQuote();
  console.log(quote);
});
var quote = {};
function getQuote() {
  getData();
}
function getData() {
  var script = document.createElement('script');
  script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=getObject";
  document.getElementsByTagName('head')[0].appendChild(script);
}
function getObject(response) { 
  Object.assign(quote, response);
}

