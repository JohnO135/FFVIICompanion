import React from 'react';
import Viewer from './Viewer';
import VerticalMenu from './VerticalMenu';

var menuItems = [
    {
        text: "Special",
        link: "/Beastiary"
    },
    {
        text: "Thanks",
        link: "/TownGuide"
    },
    {
        text: "To",
        link: "/Materia"
    },
    {
        text: "Kewpie",
        link: "/Materia"
    }
];

export default function TitlePage() {
  return (
    <div className="content">
        <Viewer/>
        <VerticalMenu menuItems={menuItems}/>
    </div>
  )
}
