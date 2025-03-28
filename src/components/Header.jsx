/* import React from 'react'

function Header() {
  return (
    <header className='header' style={{backgroundColor: '#f8f9fa', padding:'20px', margin:'10px', alignContent:'left'}}>
        <h1>Social Media Analytics</h1>
        <a href="#" style={{textDecoration: 'none', color: '#007bff'}}>Home</a>
        <a href="#" style={{textDecoration: 'none', color: '#007bff', marginLeft:'20px'}}>Trending</a>
        <a href="#" style={{textDecoration: 'none', color: '#007bff', marginLeft:'20px'}}>Top Users</a>
        <a href="#" style={{textDecoration: 'none', color: '#007bff', marginLeft:'20px'}}>Feed</a>
    </header>
  )
}

export default Header */
import React from 'react';

function Header() {
  const Links = [
    {name:'Home',href:'#'},
    {name:'Trending',href:'#'},
    {name:'Top Users',href:'#TopUser.jsx'},
    {name:'Feed',href:'#'},   
  ]

  return (
    <header
      className="header"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '10px',
        margin: '15px',
        marginRight:'30px',
        textAlign: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Social Media Analytics</h1>
      {Links.map((link, index) => (
        <a
          key = {index}
          href={link.href}
          style={{
            color: '#007bff',
          }}
        >
          {link.name}
        </a>
      ))}
    </header>
  );
}

export default Header;