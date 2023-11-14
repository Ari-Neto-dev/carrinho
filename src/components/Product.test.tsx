// src/components/Product.test.tsx
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import queryClient from '../queryClient';
import Product from './Product';

test('renders product list', async () => {
  await act(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Product />
      </QueryClientProvider>
    );
  });

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Simular o retorno da API e verificar se os produtos são renderizados corretamente
});
