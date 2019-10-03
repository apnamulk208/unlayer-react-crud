
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
#root {
  height:100%;
}
#demo {
  height: 100%;
}
`

const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
height: 100%;
`
const NewTemplate = styled(Link)`
flex: 1;
padding: 10px;
margin-left: 10px;
font-size: 14px;
font-weight: bold;
background-color: #000;
color: #FFF;
border: 0px;
max-width: 150px;
cursor: pointer;
text-decoration: none;
text-align: center;

`
const EditTemplate = styled(NewTemplate)`
position: absolute;
bottom: 20px;
left: 10px;
width: 50px;
`
const DeleteTemplate = styled(EditTemplate)`
right:20px;
left: unset;
width: 50px;


`
const Bar = styled.div`
flex: 1;
background-color: #4169E1;
color: #FFF;
padding: 10px;
display: flex;
max-height: 40px;
h1 {
  flex: 1;
  font-size: 16px;
  text-align: left;
}
button{
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #000;
  color: #FFF;
  border: 0px;
  max-width: 150px;
  cursor: pointer;
}

`
const ActionButton = styled.button`
flex: 1;
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #000;
  color: #FFF;
  border: 0px;
  max-width: 150px;
  cursor: pointer;
`
const CardContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  padding: ${props => props.padding || 10}px;           
  &:after {
    content: "";
    flex: auto;
  }

`
const Card = styled.div`
  height: 10rem;
  flex: 0 1 20%;
  min-width: 225px;
  & >  div {
    position: relative;
    margin: ${props => props.margin || 10}px;
    background-color: ${props => props.bgColor || '#4180e1'};
    box-sizing: border-box;
    height: calc(100% - 1.6rem );
    padding: .8rem;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
    // border-radius: 5px;
  }

`

const CardTitle = styled.div`
  font-size: 1rem;
  margin-top: .8rem; 
`
const EditButtton = styled.button`
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #000;
  color: #FFF;
  border: 0px;
  cursor: pointer;
`
function uid() {
  function _p8(s) {
    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
}
export {DeleteTemplate,  ActionButton, CardTitle, EditButtton, Card, CardContainer, Bar, GlobalStyle, Container, uid, NewTemplate, EditTemplate };