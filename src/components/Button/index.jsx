import './style.css'

function Button(params){
  return <button id={params.id || ""} className="button" type={params.type || "button"}>{params.text}</button>
}

export default Button