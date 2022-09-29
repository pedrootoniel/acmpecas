import styled from 'styled-components'
export const Container = styled.div`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #121212;
color: #fff;
padding:14px;

.title{
  margin-bottom: 14px;
}
.form{
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input{
  margin-bottom: 14px;
  height: 34px;
  border-radius: 4px;
  border: 0px;
  padding: 0 8px;
  outline: 0;
}
.textarea{
  margin-bottom: 14px;
  border-radius: 4px;
  border:0;
  padding: 8px;
  height: 94px;
  resize: none;
  outline: 0;
}
.button{
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: #0fbdff;
  font-size: 18px;
  transition: background-color, transform 0.8s;

}
.button:hover{
  background-color: #0fe3ff;
  transform: scale(1.01);
}

.fim{

color: var(--color-background);
font-size: 20px;
padding: 20px;
width: auto;
}
a{
  text-decoration: none;
  color: green;
}
.fa-square-whatsapp{
margin: 10px;
color: green;
font-size: 30px;
}
`