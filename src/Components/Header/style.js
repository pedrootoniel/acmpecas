import styled from 'styled-components';

export const Container = styled.div`
  background: var(--container-color);
  padding: 0 30px;
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  `
  export const Header = styled.header`
  display: flex;

  .logo{

    flex: 0em;
    
  }
  a{
    text-decoration: none;
    color: var(--color-background);
    margin: 20px;
    font-size: 17px;
  }
  a:hover{
    color: var(--color-red);
  }
  .menu{
    margin: 20px;
  }


`