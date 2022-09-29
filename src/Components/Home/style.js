import styled from 'styled-components';

export const Container = styled.div`
margin:70px;
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
 margin: 10px auto;
}
.comprar {
  width: 60px;
  background: #a8f;
  color: #103;
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
  background:var(--color-background);
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 4px;
  display: grid;
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
