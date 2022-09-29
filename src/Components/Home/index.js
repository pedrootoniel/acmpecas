import React from 'react'
import {Container} from './style'
import Logo from './../../Assets/loja.jpg'
import Logo1 from './../../Assets/1.jpg'
import Logo2 from './../../Assets/2.jpg'
import Logo3 from './../../Assets/3.jpg'
import Logo4 from './../../Assets/logo.png'
function index() {
  return (
    <Container>
      <h1 className='h1edit sexos'>Comércio Eletrônico</h1>
      <img className="imgs" src={Logo4} />
  <div className="grid">
    <div className='item'>
      <h2>Escavadeiras</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo} />
      <p>Escavadeiras para você trabalhar com agilidade e rapidez.</p>
      <a className="comprar" href="/" target="_blank">Comprar</a>
    </div>
    
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo1} />
      <p>Embreve</p>
      <a className="comprar" href="/" target="_blank">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo2} />
      <p>Embreve</p>
      <a className="comprar" href="/" target="_blank">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo3} />
      <p>Embreve</p>
      <a className="comprar" href="/" target="_blank">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo3} />
      <p>Embreve.</p>
      <a className="comprar" href="/">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo3} />
      <p>Embreve</p>
      <a className="comprar" href="/" target="_blank">Comprar</a>
    </div>
  </div>
  <img className="imgs" src={Logo4} />
    </Container>
  )
}

export default index