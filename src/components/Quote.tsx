
interface Props {
    quote: string;
}

function Quote(props : Props) {

    return <h1>{props.quote}</h1>;
}

export default Quote;