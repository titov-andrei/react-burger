import React from "react";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
    });
    return (
      <div className="order-wrap">
        <h2>Ваш Заказ</h2>
        <ul className="order">
          {orderIds.map((key) => {
            return <li>{key}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Order;
