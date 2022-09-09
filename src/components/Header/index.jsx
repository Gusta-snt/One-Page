import Button from "./../Button"
import homeImage from "./../../assets/images/homeImage.svg"
import "./style.css"

function Header(){
  return (
    <header>
      <div className="texts-button-wrapper">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p className="site-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
        <Button text="Botão"/>
      </div>
      <img src={homeImage} alt="Mini workers with giant gift boxes." />
    </header>
  )
}

export default Header