import React from "react";

class Burger extends React.Component {
  render() {
    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={this.props.details.image} alt="img" />
        </div>
        <div className="burger-details">
          <h3 className="burger-name">{this.props.details.name}</h3>
        </div>
      </li>
    );
  }
}

export default Burger;
