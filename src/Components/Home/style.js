import styled from 'styled-components';

export const Container = styled.div`
width: 100vw; 
display: flex;
justify-content: center;
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
  max-width: 50%;
 
}
.imgs{
  display: block;
 
}
.comprar {
  width: 70px;
  background: var( --color-red);
  color: var( --color-background);
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  margin: 5px;
  font-size: 18px;
}
.comprar:hover{
  background-color: #103;
  color: #a8f;
}
.item {
  margin: 10px;
  background:var( --color-comments);
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 4px;
  display: grid;
  color: var(--color-background);
}

.grid {
  display: grid;
  height: 800px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  place-content: start;
 
}
p{
  margin: 10px;
}


`
