import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
  position: fixed;
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
    color: red;
    margin: 20px;
    font-size: 20px;
  }
  a:hover{
    color: white;
  }
  .menu{
    margin: 20px;
  }


`