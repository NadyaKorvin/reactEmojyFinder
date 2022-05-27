export function Card({ symbol, keywords, title }) {
  return (
    <div className="emoji__block">
      <div>{symbol}</div>
      <h3>{title}</h3>
      <p>{keywords}</p>
    </div>
  )
}
