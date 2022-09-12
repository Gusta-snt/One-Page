import "./style.css"
import Input from "./../Input"
import Button from "./../Button"

function Footer(){
  return (
    <footer>
      <form>
        <h2>Entre em contato</h2>
        <Input type="text" placeholder="Nome"/>
        <Input type="email" placeholder="Email"/>
        <Input type="text" placeholder="Telefone"/>
        <textarea placeholder="Menssagem"></textarea>
        <Button text="Enviar mensagem" type="submit" id="submit-button"/>
      </form>
    </footer>
  )
}

export default Footer