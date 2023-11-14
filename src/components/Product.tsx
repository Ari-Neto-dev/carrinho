// src/components/Product.tsx
import React from 'react';
import { useQuery } from 'react-query';

interface Product {
  id: number;
  name: string;
  // outras propriedades do produto
}

const fetchProducts = async (): Promise<Product[]> => {
  // Lógica para buscar produtos da API
  // Exemplo: const response = await fetch('API_ENDPOINT/products');
  // return response.json();
  return [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
};

const Product: React.FC = () => {
  const { data: products, isLoading } = useQuery('products', fetchProducts);

  if (isLoading) {
    // Renderizar um shimmer/skeleton enquanto carrega os produtos
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
