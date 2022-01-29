import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="wrap">
          <div className="header-content">
            <div className="header-rating">
              <div className="header-rating_tag">Рейтинг: </div>
              <div className="header-rating_icon">+++</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
