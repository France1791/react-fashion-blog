import React from 'react'
import {useState} from 'react';
import Nav from './Nav';

function Header() {
    const [items, setItems] = useState([
        {name:"Women's", href: "#"},
        {name: "Men's", href: "#"},
        {name: "On the Street", href: "#"},
        {name: "The Catwalk", href: "#"},
        {name: "AdWatch", href: "#"},
        {name: "About", href: "#"},
    ]);
  return (
    <div>
      <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <div className='navtop'>
           <Nav items={items} />
            </div>  
    </header>
    </div>
  );
}

export default Header
