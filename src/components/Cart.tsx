// src/components/Cart.tsx
import React from 'react';
import { useQuery } from 'react-query';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  // outras propriedades do item do carrinho
}

const fetchCartItems = async (): Promise<CartItem[]> => {
  // Lógica para buscar itens do carrinho da API
  // Exemplo: const response = await fetch('API_ENDPOINT/cart');
  // return response.json();
  return [{ id: 1, name: 'Product 1', quantity: 1 }, { id: 2, name: 'Product 2', quantity: 2 }];
};

const Cart: React.FC = () => {
  const { data: cartItems, isLoading } = useQuery('cartItems', fetchCartItems);

  if (isLoading) {
    // Renderizar um shimmer/skeleton enquanto carrega os itens do carrinho
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            {/* Adicione a opção de aumentar a quantidade aqui */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
