import React from 'react'
const styles = {
    background: {
        backgroundPosition: "50%",
        //backgroundImage: "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png')",
        height: "350px",
    },
  } as const;
  
function Header() {
  return (
    <header>
        <div className="top-0 sticky py-4">
           <h1 className="uppercase text-center text-3xl tracking-wider">stickattop</h1>
        </div>
        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li>hh</li>
        </ul>
      </div>
   </header>
  )
}

export default Header