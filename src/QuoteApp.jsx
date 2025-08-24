import { useState, useEffect } from "react";

function QuoteApp(){
    const [randomQuote, setRandomQuote] = useState(null);

    function getNewQuote() {
        fetch(`https://api.quotable.io/random`)
        .then(response => response.json())
        .then(data => { setRandomQuote(data) } );
}


useEffect(() => {  
    getNewQuote()
    }, []);


return (randomQuote ? (<div> 
    <h1>{randomQuote.content}</h1>
    <p>- {randomQuote.author}</p>
    <p><button onClick={getNewQuote} >Get a New Quote</button></p>
</div>) 
: (<p>Loading...</p>));

}
export default QuoteApp;
