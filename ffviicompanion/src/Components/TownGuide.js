import React from 'react';
import Viewer from './Viewer';
import VerticalMenu from './VerticalMenu';

var menuItems = [
  {
    text: "Kalm",
  },
  {
      text: "Gongaga",
  },
  {
      text: "Nibelheim",
  }
];

export default function TownGuide() {
  return (
    <div className="content">
        <Viewer/>
        <VerticalMenu menuItems={menuItems}/>
    </div>
  )
}
