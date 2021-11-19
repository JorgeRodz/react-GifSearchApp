import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ id, title, url }) => {
  // prettier-ignore
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  );
};

GifGridItem.propTypes = {};

export default GifGridItem;

/*

  1. Enzyme
  2. Enzyme to Json
  3. Debe de mostrar el component correctamente
    - shallow
    - wrapper
    - wrapper .toMatchSnapshot()

*/
