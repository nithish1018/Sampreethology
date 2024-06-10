// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountLayout from './pages/layout';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import QuotesPage from './pages/QuotesPage';
import ContactPage from './pages/ContactPage';
import AuthorInfo from './pages/AuthorInfo';
import 'primeicons/primeicons.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <>
    <ToastContainer />
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<AccountLayout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="quotes" element={<QuotesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="authorInfo" element={<AuthorInfo />} />


        </Route>
      </Routes>
    </Router>
  </>

);

export default App;
