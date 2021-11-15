import React from "react";
// import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__animated animate__fadeIn">👉️ {category} </h2>
      {
        /* Cuando "loading" pasa a "false" no se renderiza nada; es como si pasaramos null */
        loading && (
          <p className="animate__animated animate__flash">Loading...</p>
        )
      }

      <div className="card__grid">
        {
          // prettier-ignore
          images.map((img) => (
          <GifGridItem
            key={ img.id } // Propiedad requerida para que cada componente de la lista sea unico; esto con la finalidad de aplicar comportamientos individuales a cada elemento si se requiere de ello.
            { ...img } // estas son las props que pasamos al componente; usamos desestructuracion para pasarlas individualmente.
          />
        ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
