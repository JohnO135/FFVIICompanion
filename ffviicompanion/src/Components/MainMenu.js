import React from 'react'
import {menuItems} from './MainMenuData'

export default function Menu() {
  return (
    <div className='menu section'>
        {menuItems.map((val, key) => {
          return (
            <div 
              key={key}
              onClick={() => {window.alert("Menu working")}}
              className="menu-item"
            >
                {val.text}
            </div>
          );
        })}
    </div>
  )
}
