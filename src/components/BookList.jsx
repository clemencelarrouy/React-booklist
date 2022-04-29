import React, { Component } from 'react';

import Book from './Book/Book';

class BookList extends Component {
  constructor(props) { 
    super(props);
    this.state = { apibooks: props.books };
    this.renderBook = this.renderBook.bind(this);
  }

  renderBook = () => this.state.apibooks?.map((props, index) => { 
    return  <Book key={index} {...props} />;
  });

  render() {
 
    return (
      <ul className='flex flex-wrap gap-6 mx-12' >{this.renderBook()} </ul>
    );
  }
}

export default BookList;
