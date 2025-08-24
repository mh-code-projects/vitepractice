
const [randomQuote, getRandomQuote] = useState(null);

useEffect(() => { 
    fetch(`https://api.quotable.io/random`).then(response => response.json()).then(data => { getRandomQuote(data) } );
    setVariableFunction
    return quote;
}, []);


