import React, { useEffect } from 'react';
import Img from 'assets/img/logo.svg';
import Carrinho from 'assets/img/Vector.svg';
import Moto from 'assets/img/moto.svg';
import Relogio from 'assets/img/relogio.svg';
import { Navbar, Nav, Row, Col, Container  } from 'react-bootstrap';
import { Cart, ListHeader } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store';
import { getLists } from 'store/actions';
import { formatPrice } from 'utils/format';
import { Link } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch();
    const cartSize  = useSelector((state: RootState) => state.list.products);
    useSelector((state: RootState) => state.list.amount);
    const total = cartSize.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0);

    useEffect(() => {
        dispatch(getLists());
      }, [dispatch]);
      
    return (
        <>
        <Container className="mt-2">
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <Link to="/">
                    <img src={Img} width="90" alt="Pet Friends"></img>
                </Link>
            </Navbar.Brand>
            <Nav>
                <Row>
                <Col xl={9}>
                    <ListHeader>
                        <h3>Pet Friends Acessories</h3><span><img src={Relogio}  alt="relogio"></img>ABERTO AGORA</span>
                        <br/>
                        <h6>Avenida Rio Grande do Sul, 1520, Estados| 58030-021 | João Pessoa-PB</h6>
                
                        <h6><b><img src={Moto} width="20" alt="moto"></img>Delivery:</b> 35m - 1h:40<strong>Entrega:</strong>À partir de R$3,00</h6>
                    </ListHeader>
                </Col>
                <Col>
                    <Cart to="/cart">
                        <div>
                        <strong><img src={Carrinho} width="20" alt="carrinho"></img>{cartSize.length} Produtos no carrinho</strong>
                            <span><b> {formatPrice(total)}</b></span>
                        </div>
                    </Cart>            
                </Col>
                </Row>
            </Nav>
        </Navbar>
        </Container>
        </>
    )
}
export default Header;