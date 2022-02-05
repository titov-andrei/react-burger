import React from "react";

class Order extends React.Component {
  renderOrder = (key) => {
    return <li>{key}</li>;
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];
      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Ваш Заказ</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        {total}
      </div>
    );
  }
}

export default Order;
