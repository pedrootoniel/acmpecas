import styled from 'styled-components';

export const Container = styled.div`
  background: var(--container-color);
  padding: 0 30px;
  position: fixed;
  flex-direction: column;
  height: 90px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  `
  export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  height: 52px;
  a{
    text-decoration: none;
    color: var(--color-background);
    margin: 20px;
    font-size: 20px;
  }
  a:hover{
    color: var(--color-red);
  }
  .menu{
    margin: 20px;
  }


`