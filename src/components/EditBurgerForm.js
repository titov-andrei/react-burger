import React from "react";

class EditBurgerForm extends React.Component {
  render() {
    return (
      <div className="burger-edit">
        <input name='name' type='text' />
        <input name='price' type='text' />
        <select name='status'>
          <option value='available'>Доступно!</option>
          <option value='unavailable'>Не доступно!</option>
        </select>
        <input name='desc' type='text' />
        <input name='image' type='text' />
      </div>
    );
  }
}

export default EditBurgerForm;
