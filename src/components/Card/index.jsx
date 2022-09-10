import "./style.css"

function Card(){
  return (
    <article className="card">
      <div className="color"></div>
      <h2 className="title">Título do card</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
    </article>
  )
}

export default Card