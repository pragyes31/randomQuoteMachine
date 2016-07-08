var quotes = ["If a person gets his attitude toward money straight, it will help straighten out almost every other area in his life.", "The philosopher who said that work well done never needs doing over never weeded a garden.", "You can always tell an old soldier by the inside of his holsters and cartridge boxes. The young ones carry pistols and cartridges: the old ones, grub.", "When choosing between two evils, I always like to pick the one I never tried before.", "l have no fear of change as such and, on the other hand, no liking for it merely for its own sake."];

var author = ["Billy Graham", "Ray D. Everson", "George Bernard Shaw", "Mae West", "Robert Moses"];

var lastNumber;

function generateNumber() {
var newNumber = Math.floor(Math.random()*quotes.length);

while (lastNumber === newNumber) {
	newNumber = Math.floor(Math.random()*quotes.length);
}
lastNumber = newNumber;
return lastNumber;
}

var newRandomQuote = function() {
	var quoteIndex = generateNumber();
	//var quoteIndex = Math.floor(Math.random()*quotes.length);
	//lastNumber = quoteIndex;
	
    $("#quote").html("<p>" + quotes[quoteIndex] + "</p>");
    $("#reference").html("<p>" + author[quoteIndex] + "</p>");
}
$("#newQuoteButton").click(newRandomQuote);

newRandomQuote();