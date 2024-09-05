import React from 'react'

function Nav({items= []}) {
  return (
    <div>
       <nav aria-label="Main Navigation" role="navigation">
            <ul>
                {items.map((item, index) => (
                    <li key={index}><a href="">{item.name}</a></li>
                ))}
              
            </ul>
        </nav>
    </div>
  )
}

export default Nav
