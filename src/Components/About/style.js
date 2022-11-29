import styled from 'styled-components';
export const Container = styled.div`
width: 100vw; 
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
padding:14px;
margin-top: 72px;
background: var(--container-color);

.paragrafo{
  text-align: center;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding: 10px;
}
.paragrafo1{
  text-align: center;
  font-family: fantasy;
  padding: 10px;


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
