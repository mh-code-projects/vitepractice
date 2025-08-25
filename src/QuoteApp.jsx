import { useState, useEffect } from "react";

function QuoteApp(){
    const [randomQuote, setRandomQuote] = useState(null);
    const [seconds, setSeconds] = useState(10);
    
    function getNewQuote() {
        fetch(`https://api.quotable.io/random`)
        .then(response => response.json())
        .then(data => { setRandomQuote(data) } );
}

    useEffect(() => {  
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1)
        }, 1000);
        return () => clearInterval(intervalId);
        }, []);

    useEffect(() => {
        if (seconds === 0) {
            getNewQuote();
            setSeconds(10);
        }
    }, [seconds]);
    
    useEffect(() =>{  
        getNewQuote()}, []);



return (randomQuote ? (<div> 
    <h1>{randomQuote.content}</h1>
    <p>- {randomQuote.author}</p>
    <p><button onClick={getNewQuote} >Get a New Quote</button></p>
</div>) 
: (<p>Loading...</p>));

}
export default QuoteApp;
