import React from 'react';
import { Cart, Container } from './styles'
import { Link } from 'react-router-dom'
import logo from 'assets/img/Lojinha.svg'
import { MdShoppingBasket } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { RootState } from 'store';

const Header = () => {

    const cartSize  = useSelector((state: RootState) => state.list.products);
    
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Lojinha" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize.length} itens</span>
                </div>
                <MdShoppingBasket size={70} color="#fff"></MdShoppingBasket>
            </Cart>
        </Container>
    )
}
export default Header;