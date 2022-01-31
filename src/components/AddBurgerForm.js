import React from "react";

class AddBurgerForm extends React.Component {
  render() {
    return (
      <form>
        <input name="name" type="text" placeholder="Name" autoComplete="off" />
        <input name="price" type="text" placeholder="Name" autoComplete="off" />
        <input name="status" type="text" placeholder="Name" autoComplete="off" />
        <input name="desc" type="text" placeholder="Name" autoComplete="off" />
        <input name="image" type="text" placeholder="Name" autoComplete="off" />
      </form>
    );
  }
}

export default AddBurgerForm;
