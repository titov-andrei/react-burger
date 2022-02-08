import React, { Component } from "react";

class Shipment extends Component {
  render() {
    const { total } = this.props;
    return (
      <div className="total">
        <div className="total_wrap">
          <div className="total_wrap-final">Итого: {total} ₽</div>
        </div>
      </div>
    );
  }
}

export default Shipment;
