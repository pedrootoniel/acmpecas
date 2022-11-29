import React from 'react'
import {Container} from './style';


function index() {
  return (
    <Container>
         
      <p className='paragrafo'>Sobre nós</p>
      <div class="col-md-8 text-center">
            <p class="paragrafo1" data-aos="fade-up" data-aos-delay="100">UMA HISTÓRIA DE DESAFIOS E SUPERAÇÕES.</p>
            
          </div>
          <center><a href="https://api.whatsapp.com/send?phone=5562985818528&text=Ol%C3%A1%2C%20encontrei%20voc%C3%AAs%20pelo%20site%2C%20queria%20saber%20mais%20sobre%20voc%C3%AAs!" target="_blank" className='btn btn-primary mr-2 mb-2'>Faça um Orçamento</a> </center>
    </Container>
  )
}

export default index