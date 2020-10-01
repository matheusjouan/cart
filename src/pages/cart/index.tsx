import React, { useState, useEffect, useMemo } from 'react';

import api from '../../service/api';
import formatValue from '../utils/formatValue';

import { Container, CartList, CartItem, CartTotal } from './styles';

interface IItens {
  uniqueId: string;
  name: string;
  imageUrl: string;
  price: number;
  sellingPrice: number;
  formattedPrice: number;
  formattedSellingPrice: number;
}

const Cart: React.FC = () => {
  const [itens, setItens] = useState<IItens[]>([]);

  useEffect(() => {
    async function loadItens() {
      const response = await api.get('/items');

      // Formatando os valores
      const formattedItens = response.data.map((item: IItens) => ({
        ...item,
        price: item.price,
        sellingPrice: item.sellingPrice,
        formattedPrice: formatValue(item.price / 100),
        formattedSellingPrice: formatValue(item.sellingPrice / 100),
      }));

      setItens(formattedItens);
    }
    loadItens();
  }, []);

  const cartTotal = useMemo(() => {
    const totalItens = itens.reduce((acc, current: IItens) => {
      const subTotal = current.sellingPrice / 100;
      return subTotal + acc;
    }, 0);
    return totalItens;
  }, [itens]);

  return (
    <Container>
      <h1>Meu Carrinho</h1>
      <CartList>
        {itens.map(item => (
          <CartItem key={item.uniqueId}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="info-item">
              <strong>{item.name}</strong>
              <span className="price">{item.formattedPrice}</span>
              <strong>{item.formattedSellingPrice}</strong>
            </div>
          </CartItem>
        ))}
      </CartList>
      <CartTotal>
        <div className="totalCart">
          <strong>Total</strong>
          <strong>{formatValue(cartTotal)}</strong>
        </div>

        {cartTotal >= 10 && <span>Parabéns, sua compra tem frete grátis!</span>}
      </CartTotal>

      <form>
        <button type="submit">Finalizar Compra</button>
      </form>
    </Container>
  );
};

export default Cart;
