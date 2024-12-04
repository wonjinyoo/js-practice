const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "THEODORE ROOSEVELT",
  },
  {
    quote: "If you can change your mind, you can change your life.",
    author: "WILLIAM JAMES",
  },
  {
    quote: "You are enough just as you are.",
    author: "MECHAN MARKLE",
  },
  {
    quote: "If you want the rainbow, you gotta put up with the rain.",
    author: "DOLLY PARTON",
  },
  {
    quote: "When the whole world is silent, even one voice becomes powerful",
    author: "MALALA YOUSAFZAI",
  },
  {
    quote: "Eating, Sleeping, and being happy is important.",
    author: "WONJIN YOO",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
