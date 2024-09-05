import React from 'react'
import {useState} from 'react';
import Nav from './Nav';

function Footer() {
    const [items, setItems] = useState([
        {name:"Home"},
        {name:"Women's"},
        {name: "Men's"},
        {name: "On the Street"},
        {name: "The Catwalk"},
        {name: "AdWatch"},
        {name: "About"},
        {name: "Tips"},
    ]);
  return (
    <div>
     <footer>
        <div className='navBottom'>
        <Nav items={items} />
            </div>
        <p>&copy; 2013 Valet Industries, Inc</p>
    </footer> 
    </div>
  )
}

export default Footer
