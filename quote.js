function displayQuote(data) {
    $("#quote").empty();
    $("#author").empty();
    $("#quote").append(data.quote);
    $("#author").append(data.author);
}

function updateQuote () {
    console.log("bip!");
    $.ajax( {
        url : 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
        dataType : 'json',
        type : 'POST',
        headers : {"X-Mashape-Key": 'iYsih6jNbDmshdB4W1xdm9j03SAXp1Ylyt6jsn0imvnyFRu2qu', Accept: 'application/json','Content-Type': 'application/x-www-form-urlencoded'},
        success : function(data) {
            displayQuote(data);
        }
    });
}