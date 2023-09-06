import React from 'react'

const Menu = ({menular1,menular2}) => {
  return (
    <div className='container'>
      <div className='box'>
      <div className="in-box">
      <div className="text-part">
      <p className='ffoodtext'>FAST FOOD</p>
      <p className='menutitle'>MENU</p>
      </div>
      <div className="menu-part">
      <div className="menu-part1">
      {menular1.map(menuObj1 => (
      <div className='gmenutext'>
      <img className = 'menuimages' src= {menuObj1.img} alt="menu" />
      <div className='menutext'>{menuObj1.name}</div>
      <div className='menutext'>__${menuObj1.price}</div>
      </div>
      ))}
      </div>
      <div className="menu-part2">
      {menular2.map(menuObj2 => (
      <div className='gmenutext'>
      <img className = 'menuimages' src= {menuObj2.img} alt="menu" />
      <div className='menutext'>{menuObj2.name}</div>
      <div className='menutext'>__${menuObj2.price}</div>
      </div>
      ))}
      </div>
      </div>   
      </div>
      </div>
      </div>
  )
}

export default Menu