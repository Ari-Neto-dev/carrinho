// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import Product from './components/Product';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Product} />
        <Route path="/cart" component={Cart} />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
