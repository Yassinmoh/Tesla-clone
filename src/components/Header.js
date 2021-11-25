import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    const cars=useSelector(selectCars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
            <CustomIocn onClick={()=>setBurgerStatus(true)} />
            </RightMenu>
            <BurgerMenu show={burgerStatus} onClick={()=>setBurgerStatus(false)}>
                <CloseWraper >
                    <CustomClose  />
                </CloseWraper>
                {cars && cars.map((car, index)=>(
                <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
            </BurgerMenu>
        </Container>
    )
}


// ----------------------(Styled-Components)--------------------------
const Container=styled.div`
min-height:60px;
position: fixed;
display: flex;
align-items: center;
justify-content:space-between;
padding: 0px 20px;
top: 0px;
left: 0px;
right: 0px;
z-index: 1;
`

const Menu =styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
    @media(max-width:768px){
        display: none;
    }
`

const RightMenu=styled.div`
display: flex;
align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;

    }
`

const CustomIocn=styled(MenuIcon)`
cursor: pointer;
`

const BurgerMenu =styled.ul`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index:16;
list-style: none;
padding: 20px;
display: flex;
text-align: start;
flex-direction: column;
transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0,0.2);
            a{
                font-weight: 600;
        }
    }
`

const CustomClose=styled(CloseIcon)`
cursor: pointer;
`

const CloseWraper =styled.div`
display: flex;
justify-content: end;
`

// ----------------------(Styled-Components)--------------------------

export default Header
