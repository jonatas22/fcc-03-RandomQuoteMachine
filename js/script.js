import quotes from "../quotes.js";

let htmlQuote = "";
let htmlAuthor = "";
let backgroundColor = "";
let min = 0;
let randomQuote = 0;

let max = quotes.length; //Número de quotes

$("#new-quote").on("click", function () {
  randomQuote = Math.floor(Math.random() * (max - min)) + min;
  htmlQuote = quotes[randomQuote].quote;
  htmlAuthor = "- " + quotes[randomQuote].author;
  backgroundColor = quotes[randomQuote].color;

  $("#quote").html(htmlQuote);
  $("#quote-author").html(htmlAuthor);
  $(".color").css("color", backgroundColor);
  $(".background-color").css("background-color", backgroundColor);
  $("#tw-link").attr(
    "href",
    'https://twitter.com/intent/tweet?hashtags=ValniceMilhomens&text="' +
      htmlQuote +
      '"'
  );

  //Reanimate #quotes-div
  let el = $("#quotes-div");
  let newElem = el.clone(true);
  el.before(newElem);
  $(el).remove();
});
