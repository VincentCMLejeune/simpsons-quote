import './DisplayQuote.css'

export default function DisplayQuote({quote}) {
    return (
        <div className={quote.characterDirection === 'Left' ? 'display-right' : 'display-left'}>
            <figcaption>
                <blockquote>{quote.quote}</blockquote>
                <cite>{quote.character}</cite>
            </figcaption>
            <img src={quote.image} alt={quote.character} className="quote-img" />
        </div>
    )
}