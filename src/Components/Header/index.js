import React from 'react'
import {Container, Header} from './style'

function index() {
  return (
    <Container>
   <Header>
    <a href='/'>Acm Peças</a>
    <nav className='menu'>
      <a href='/'>Inicio</a>
      <a href='/'>Produtos</a>
      <a href='/'>Sobre nós</a>

    </nav>
   </Header>
    </Container>
  )
}

export default index