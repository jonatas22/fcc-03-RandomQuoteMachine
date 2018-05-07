$(function() {

    var items = [];
    var htmlQuote = "";
    var htmlAuthor = "";
    var backgroundColor = "";
    var min = 0;
    var randomQuote = 0;
    // var lastRandom = 1;    

    $.getJSON("./quotes.json", function(json) {
  
        json.forEach(function(valObj) {
                items.push(valObj);                            
        });

            var max = items.length; //Número de quotes

        $("#new-quote").on("click", function() {
            randomQuote = Math.floor(Math.random() * (max - min)) + min;
            htmlQuote = items[randomQuote].quote;
            htmlAuthor = "- " + items[randomQuote].author;
            backgroundColor = items[randomQuote].color;

            $("#quote").html(htmlQuote);
            $("#quote-author").html(htmlAuthor);
            $(".color").css("color", backgroundColor);
            $(".background-color").css("background-color", backgroundColor);
            $("#tw-link").attr("href", 'https://twitter.com/intent/tweet?hashtags=ValniceMilhomens&text="' + htmlQuote + '"');

        //Reanimate #quotes-div
            var el = $("#quotes-div");
            var newElem = el.clone(true);
            el.before(newElem);
            $(el).remove(); 
        });
           
    })



});