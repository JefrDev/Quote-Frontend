import Quote from "../Quote/Quote";

function QuoteSpace() {
    let QuoteExamples = ['leven is geen 1v1', 'sjors is een teringlijer!']


    return <>
    {QuoteExamples.map(perQuote => <Quote quote={perQuote}></Quote>)}
    </>;
}

export default QuoteSpace;