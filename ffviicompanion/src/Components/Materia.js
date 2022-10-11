import React from 'react';
import Viewer from './Viewer';
import VerticalMenu from './VerticalMenu';

var menuItems = [
  {
    text: "Cure",
  },
  {
      text: "Fire",
  },
  {
      text: "All",
  }
];

export default function Materia() {
  return (
    <div className="content">
        <Viewer/>
        <VerticalMenu menuItems={menuItems}/>
    </div>
  )
}
