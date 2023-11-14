// src/components/Cart.test.tsx
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import queryClient from '../queryClient';
import Cart from './Cart';

test('renders shopping cart', async () => {
  await act(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Cart />
      </QueryClientProvider>
    );
  });

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Simular o retorno da API e verificar se os itens do carrinho são renderizados corretamente
});
