function randomQuotes() {
    var quotes = [
        {
            quote: "“ Be yourself; everyone else is already taken.”",
            author: "--Oscar Wilde"
        },
        {
            quote: "“ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            author: "--Marilyn Monroe"
        },
        {
            quote: "“ Being different isn't a bad thing. I means that you are brave enough to be yourself.”",
            author: "--Luna Lovegood"
        },
        {
            quote: "“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author: "--Albert Einstein"
        },
        {
            quote: "“ Never trust anything that can think for itself if you can't see where it keeps its brain.”",
            author: "--Arthur Weasley"
        },
        {
            quote: "“ Every human life is worth the same, and worth saving.”",
            author: "--Kingsley Shacklebolt"
        },
        {
            quote: "“ Live as if you were to die tomorrow. Learn as if you were to live forever.”",
            author: "--Mahatma Gandhi"
        },
        {
            quote: "“ Happiness can be found even in the darkest of times, if one only remembers to turn on the light.”",
            author: "--Albus Dumbledore"
        },
        {
            quote: "“ If you tell the truth, you don't have to remember anything.”",
            author: "--Mark Twain"
        },
        {
            quote: "“ I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
            author: "--Maya Angelou"
        }
    ];
         var num = Math.floor(Math.random() * quotes.length);
        document.getElementById("quotes").innerHTML = quotes[num].quote;
        document.getElementById("author").innerHTML = quotes[num].author;
       

}


