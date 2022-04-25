import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './classes/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import BookList from './classes/BookList';
import BookSingle from './classes/BookSingle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}>
        <Route index element={<BookList />} /> 
        <Route path="book/:id" element={<BookSingle />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
