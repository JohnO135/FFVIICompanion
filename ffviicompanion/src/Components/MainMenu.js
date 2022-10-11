import React from 'react'
import { Link } from 'react-router-dom';

var menuItems = [
    {
        text: "Beastiary",
        link: "/Beastiary"
    },
    {
        text: "Town Guide",
        link: "/TownGuide"
    },
    {
        text: "Materia",
        link: "/Materia"
    }
];

export default function Menu() {
  return (
    <div className='box main-menu section'>
        { menuItems.map((val, key) => {
          return (
            <div 
              key={key}
            >
                <Link to= {val.link} className="menu-item">{val.text}</Link>
            </div>
          );
        })}
    </div>
  )
}
