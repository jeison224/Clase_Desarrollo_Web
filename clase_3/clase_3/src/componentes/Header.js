import React from 'react';
import Styled from 'styled-components';
import imagen from '../imagenes/imagen.png'

const Header = ()=>{
    return(
        <Container>
        <a>
            <img src={imagen} alt=''></img>
        </a>

        </Container>
    )
}
export default Header;
const Container=Styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px; 
    top:0;
    left:0;
    right:0
`;