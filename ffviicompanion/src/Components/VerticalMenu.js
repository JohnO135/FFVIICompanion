import React from 'react'
import { menuItems } from './MainMenuData';

export default function VerticalMenu(menuitems) {
  return (
    <div className='box vertical-menu'>
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
