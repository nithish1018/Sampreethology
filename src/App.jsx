// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountLayout from './pages/layout';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import QuotesPage from './pages/QuotesPage';
import ContactPage from './pages/ContactPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AccountLayout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="quotes" element={<QuotesPage />} />
        <Route path="contact" element={<ContactPage />} />

      </Route>
    </Routes>
  </Router>
);

export default App;
