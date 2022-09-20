const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQuoteGenerator(){
    quoteBtn.innerText = "Loading..."
    quoteBtn.classList.add("loading");
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;  
        quoteBtn.innerText = "New Quote"; 
        quoteBtn.classList.remove("loading");
    });
};

quoteBtn.addEventListener("click",randomQuoteGenerator);

speechBtn.addEventListener("click",()=>{
    // speechsynthesisutterance is a web speech api that represent a speech request 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speak the utterance
});

copyBtn.addEventListener("click",()=>{
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the 
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank"); // opening a new twitter tab
})