import React, { Component } from 'react'

class VerticalMenu extends Component {
  render() {
    return (
      <div className='box vertical-menu'>
          {this.props.menuItems.map((val, key) => {
            return (
              <div 
                key={key}
                onClick={() => {console.log("working")}}
                className="menu-item"
              >
                  {val.text}
              </div>
            );
          })}
      </div>
    )
  };
}

export default VerticalMenu;
