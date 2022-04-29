import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { render } from '@testing-library/react';
import React, { useEffect, useState } from "react";

import BookList from "./BookList";
import BookSingle from "./BookSingle";
import Header from "./Header";
import { url } from '../Utils/Constants';

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
      console.log("🚀 ~ file: App.jsx ~ line 17 ~ useEffect ~ json", json)
        setBooks(json.books)
      });
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookSingle books={books} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
