import { useState } from 'react'
import {Container} from './style'
import emailjs from '@emailjs/browser'

export default function Singup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
function sendMail (e){
  e.preventDefault();

  if(name === '' || email === '' || message === ''){
    alert("Preencha todos os campos");
    return;
  }
  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }
  emailjs.send("service_ef9sci8", "template_hk6hi8p", templateParams, "4x7ScUnfxUllv3McW")
  .then((response) => {
    console.log("EMAIL ENVIADO", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')
  }, (err) => {
    console.log("ERROR: ", err)
  })
}
  

  return (

    <Container>
   <h1 className='title'>Contato</h1>

<form className="form" onSubmit={sendMail}>
  <input 
    className="input"
    type="text"
    placeholder="Digite seu nome"
    onChange={(e) => setName(e.target.value)}
    value={name}
  />
  
  <input 
    className="input"
    type="text"
    placeholder="Digite seu email"
    onChange={(e) => setEmail(e.target.value)}
    value={email}
  />

  <textarea 
    className="textarea"
    placeholder="Digite sua mensagem..."
    onChange={(e) => setMessage(e.target.value)}
    value={message}
  />

  <input className="button" type="submit" value="Enviar" />
</form>
<div className='fim'>
<span>Telefone: (62) 8581-8528 / </span>
<span>Email:<a href="mailto:Cadastro@acmpecas.com.br" target="_blank"> Cadastro@acmpecas.com.br</a> / </span>
<span>Whatsapp: <a href='https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!' target="_blank">(62) 98581-8528</a><i class="fa-brands fa-square-whatsapp"></i></span>
</div>

    </Container>

  )
}
