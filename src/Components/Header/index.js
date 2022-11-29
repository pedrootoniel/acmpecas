import React from 'react'
import {Container, Header} from './style'


function index() {
  return (
    
          
    <Container>

   <Header>
    <div className='logo'>
    <a href='/'>Acm Peças</a>
    </div>
    <nav className='menu'>
      <a href='/'>Inicio</a>
      <a href='/about'>Produtos</a>
      <a href='/'>Sobre nós</a>

    </nav>
    
   </Header>
   
    </Container>
  
  )
}

export default index