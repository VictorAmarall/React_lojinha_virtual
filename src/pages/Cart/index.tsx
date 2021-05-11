import React, { useEffect } from 'react';
import { Container, ProductTable, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import {formatPrice} from 'utils/format';
import { product } from 'types/types';
import { setRemoveCart, setUpdateAmount } from 'store/actions';

const Cart= () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.list.products);
    const total = product.reduce((total,product) => {
        return total + product.price * product.amount;
    }, 0);
    useSelector((state: RootState) => state.list.amount);
   
    const deleteProd =(prod:product) => {
        dispatch(setRemoveCart(prod));
        //console.log(prod)
    };

    useEffect(() => {
            product.map(x=> x.amount);
    }, [product]);
    const decrement =(prod:product) => {
        if(prod.amount <= 0){
            prod.amount=1;;
        dispatch(setUpdateAmount(prod.id,prod.amount));
        }else{
        prod.amount = prod.amount -1;
        dispatch(setUpdateAmount(prod.id,prod.amount));
        console.log(prod.amount);
        }
    };
    const increment =(prod:product) => {
        prod.amount = prod.amount +1;
        dispatch(setUpdateAmount(prod.id,prod.amount));
        console.log(prod.amount);
    };

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QT</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {product.map(prod =>(
                        <tr key={prod.id}>
                        <td>
                            <img src={prod.image} alt={prod.title} />
                        </td>
                        <td>
                            <strong>{prod.title}</strong>
                            <span>{formatPrice(prod.price)}</span>
                        </td>
                        <td>
                            <div>
                                <button type="button" onClick={()=> decrement(prod)}>
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>
                                
                                <input type="number" readOnly value={prod.amount}></input>
                                
                                <button type="button" onClick={()=> increment(prod)}>
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>

                            </div>
                        </td>
                        <td>
                            <strong>{formatPrice(prod.price*prod.amount)}</strong>
                        </td>
                        <td>
                            <button type="button" onClick={() => deleteProd(prod)}>
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>

                    ))}
                    
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar Pedido </button>
                <Total>
                    <span>TOTAL</span>
                    <strong>{formatPrice(total)}</strong>
                </Total>
            </footer>
        </Container>
    )
}
export default Cart;