// API URL -->  https://type.fit/api/quotes
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote')
let apiQuotes = [];
// Get One quote at a time
function getOneQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text
    // Check if Author field is blank, replace with 'Unknown'
    if(quote.author == null) {
        authorText.textContent = 'Unknown'
    }
    else authorText.textContent = quote.author
}
// Tweet Quote Click
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=
    ${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}
twitterBtn.addEventListener('click', tweetQuote);
// New Quote click
newQuoteBtn.addEventListener('click', getOneQuote);
// Fetch Data from API (in this case, a file)
async function getQuotes() {
    const apiUrl = "/quotes/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes)
        getOneQuote();
    } catch (error) {
        console.log(error);
    }
}
getQuotes();