const quotes = [
{
    quote : "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    author : "Albert Einstein",
},
{
    quote : "Learn as if you will live forever, live like you will die tomorrow.",
    author : "Mahatma Gandhi",
},
{
    quote : "Success usually comes to those who are too busy looking for it.",
    author : "Henry David Thoreau",
},
{
    quote : "The road to success and the road to failure are almost exactly the same.",
    author : "Colin R. Davis",
},
{
    quote : "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author : "Winston Churchill",
},
{
    quote : "Don’t let yesterday take up too much of today.",
    author : "Will Rogers",
},
{
    quote : "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    author : "Steve Jobs",
},
{
    quote : "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
    author : "Vernon Sanders Law",
},
{
    quote : "To know how much there is to know is the beginning of learning to live.",
    author : "Dorothy West",
},
{
    quote : "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author : "Thomas Edison",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

// Math.random --> picks a random number between 0 and 1

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

