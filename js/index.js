var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the future is to create it. - Peter Drucker",
];

var displayedQuotes = [];
var qoutesElement = document.getElementById("quotes");

function printQuote() {
    if (displayedQuotes.length === quotes.length) {
        return " ";
    }

    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    if (!displayedQuotes.includes(randomQuote)) {
        displayedQuotes.push(randomQuote);
        return randomQuote;
    } else {
        return printQuote();
    }
}

function callPrint() {
    var randomQuote = printQuote();
    qoutesElement.innerHTML = randomQuote;
}