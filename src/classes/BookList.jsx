import React, { Component , useState , useEffect } from 'react';
import Book from './Book';

const url = 'https://raw.githubusercontent.com/sing2gather/impala-exercise/main/data.json';


class BookList extends Component {
  constructor(props) { 
    super(props);
    this.state = { apibooks : []};
  }
  
  async componentDidMount(){ 
    const res = await fetch(url);
    const data = await res.json();
    this.setState({apibooks : data.books})
  }

  render() {
    const instances = this.state.apibooks.map(item => { 
      return  <Book key={item.id} title={item.title} author={item.author} cover={item.cover} description={item.description} id={item.id}/>;
    });
 
    return (
      <ul className='flex flex-wrap gap-6 mx-12' >{instances} </ul>
    );
  }
}

export default BookList;
