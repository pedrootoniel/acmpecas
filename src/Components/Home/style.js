import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: #fff;
padding:14px;
background-color: var(--color-background-geral);
body {
  font-family: Arial;
  
}

h1 {
  text-align: center;
}

h2 {
  margin-top: 0px;
}
.img{
  max-width: 20%;
  
 
}
.imgs{
  display: block;
 
}
.comprar {
  width: 100px;
  background: var( --color-red);
  color: var( --color-background);
  padding: 5px 20px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 18px;
}
.comprar:hover{
  background-color: black;
  color: white;
}
.item {
  background:var( --color-comments);
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 4px;
  color: var(--color-background);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 10px;
  place-content: start;
 
}
p{
  margin: 5px;
}


`
