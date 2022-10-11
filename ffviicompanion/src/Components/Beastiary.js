import React from 'react';
import Viewer from './Viewer';
import VerticalMenu from './VerticalMenu';

var menuItems = [
  {
    text: "Behemoth",
  },
  {
      text: "Sephiroth",
  },
  {
      text: "Adamantoise",
  }
];

export default function Beastiary() {
  return (
    <div className="content">
        <Viewer/>
        <VerticalMenu menuItems={menuItems}/>
    </div>
  )
}
