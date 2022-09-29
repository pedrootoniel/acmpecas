import styled from 'styled-components';
export const Container = styled.div`
width: 100vw;
height: 50vh;
min-height: 50vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: var(--container-color);
color: #fff;
padding:14px;

.paragrafo{
  text-align: center;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.paragrafo1{
  text-align: center;
  font-family: fantasy;
  margin: 20px;

}
.btn{
  font-size: 16px;
  background:var(--color-hover);
  border-color:var(--color-button);
  color: var(--color-background);
  padding: 10px 30px;
  border-radius: 30px;
  text-decoration: none;
}
.btn:hover{
  background-color: var(--color-red);
}

`
