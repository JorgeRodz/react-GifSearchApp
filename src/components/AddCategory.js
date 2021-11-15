import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    setCategories((categories) => {
      const repetead = categories.find((categorie) => categorie === inputValue);

      if (repetead) {
        alert("No puede haber dos categorias con el mismo nombre");
        setInputValue("");
        return [...categories];
      }

      setInputValue("");
      return [inputValue, ...categories];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* prettier-ignore*/}
      <label>Introduce el nombre del gif que deseas buscar</label>
      <input
        placeholder="Dragon ball z"
        type="text"
        onChange={handleOnChange}
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
