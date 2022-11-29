import React from 'react'
import {Container} from './style'
import Logo from './../../Assets/loja.jpg'
import Logo1 from './../../Assets/1.jpg'
import Logo2 from './../../Assets/2.jpg'
import Logo3 from './../../Assets/3.jpg'
import Logo4 from './../../Assets/logo.png'
import Header from '../Header'
function index() {
  return (
    <Container>
      <Header />
      <img className="imgs" src={Logo4} />
  <div className="grid">
    <div className='item'>
      <h2>Escavadeiras</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo} />
      <p>Escavadeiras para você trabalhar com agilidade e rapidez.</p>
      <a className="comprar" href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!" target="_blank">Comprar</a>
    </div>
    
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo1} />
      <p>Embreve</p>
      <a className="comprar" href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!" target="_blank">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo2} />
      <p>Embreve</p>
      <a className="comprar" href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!" target="_blank">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo3} />
      <p>Embreve</p>
      <a className="comprar" href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!" target="_blank">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo3} />
      <p>Embreve.</p>
      <a className="comprar" href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!">Comprar</a>
    </div>
    <div className="item">
      <h2>Embreve</h2>
      <p className="preco">R$ Combinar whatsap</p>
      <img className="img" src={Logo3} />
      <p>Embreve</p>
      <a className="comprar" href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!" target="_blank">Comprar</a>
    </div>
  </div>
  <img className="imgs" src={Logo4} />
    </Container>
  )
}

export default index