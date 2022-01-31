import React from "react";

class AddBurgerForm extends React.Component {
  render() {
    return (
      <form>
        <input name="name" type="text" placeholder="Name" autoComplete="off" />
        <input
          name="price"
          type="text"
          placeholder="Price"
          autoComplete="off"
        />
        <select name="status" className="status">
          <option value="available">Доступно</option>
          <option value="unavailable">Убрать из меню</option>
        </select>
        <textarea name="desc" placeholder="Desc" />
        <input
          name="image"
          type="text"
          placeholder="Image"
          autoComplete="off"
        />
      </form>
    );
  }
}

export default AddBurgerForm;
