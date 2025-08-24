import { useState, useEffect }from "react";

function fetchRandomQuote() = useEffect(() => { 
    fetch(`https://api.quotable.io/random`)
    .then(response => response.json())
    .then(data => { setRandomQuote(data) } ); 
    }, []);

const [randomQuote, setRandomQuote] = useState(null);
useEffect(() => { 
    fetch(`https://api.quotable.io/random`)
    .then(response => response.json())
    .then(data => { setRandomQuote(data) } ); 
    }, []);
return (randomQuote ? (<div> <h1>{randomQuote.content}</h1><p>- {randomQuote.author}</p></div>) : (<p>Loading...</p>));


