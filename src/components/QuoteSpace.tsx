import Quote from "./Quote";

function QuoteSpace() {
    let QuoteExamples = ['leven is geen 1v1', 'sjors is een teringlijer!']


    return <>
    {QuoteExamples.map(item => <Quote quote={item}></Quote>)}
    </>;
}

export default QuoteSpace;