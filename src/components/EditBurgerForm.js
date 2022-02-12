import React from "react";

class EditBurgerForm extends React.Component {
  render() {
    return (
      <div className="burger-edit">
        <input name="name" type="text" value={this.props.burger.name} />
        <input name="price" type="text" value={this.props.burger.price} />
        <select
          className="status"
          name="status"
          value={this.props.burger.status}
        >
          <option value="available">Доступно!</option>
          <option value="unavailable">Не доступно!</option>
        </select>
        <textarea name="desc" value={this.props.burger.desc} />
        <input name="image" type="text" value={this.props.burger.image} />
      </div>
    );
  }
}

export default EditBurgerForm;
